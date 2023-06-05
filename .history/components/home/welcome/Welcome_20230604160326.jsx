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
        
      </View>
    </View>
  )
}

export default Welcome