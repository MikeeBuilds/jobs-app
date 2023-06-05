import React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello Mike
        </Text>
        <Text style={styles.welcomeMessage}>
          Welcome to your dashboard
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Text style={styles.searchInput} val>
            Search
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Welcome