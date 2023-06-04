import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, }) => {
  return (
    <TouchableOpacity >
      <Image  
        src={iconUrl}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn