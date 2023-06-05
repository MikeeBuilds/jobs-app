import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => router.push('PopularJobs')}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={popularJobs}
          renderItem={({ item }) => <PopularJobCard job={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        
    </View>
  )
}

export default Popularjobs