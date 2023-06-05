import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, { backgroundColor: COLORS.lightGreen }]} onPress={handlePress}>
      <View style={styles.btnWrapper}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
