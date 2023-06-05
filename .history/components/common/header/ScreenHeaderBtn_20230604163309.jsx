import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { COLORS } from '../../../constants'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer, { backgroundColor: COLORS }} onPress={handlePress}>
      <Image  
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn