import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = () => {
  return (
    <TouchableOpacity style={styles.headerBtn}>
      <Image source={require('../../../assets/images/plus.png')} style={styles.headerBtnImg} />
  )
}

export default ScreenHeaderBtn