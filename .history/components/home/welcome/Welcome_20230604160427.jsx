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
      <View>
        <Text style={styles.title}>
          Your recent activities
        </Text>
      </View>
    </View>
  )
}

export default Welcome