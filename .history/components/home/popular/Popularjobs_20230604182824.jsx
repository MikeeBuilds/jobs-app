import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import { COLORS, SIZES } from '../../../constants';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => router.push('PopularJobs')}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => (
            <PopularJobCard />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle=
            />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
