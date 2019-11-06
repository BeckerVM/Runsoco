import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const CategoryItem = ({ name }) => {

  return (  
    <TouchableOpacity style={styles.containerItem}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/index-img.png')}   
      />
      <Text style={styles.title}>{ name }</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;