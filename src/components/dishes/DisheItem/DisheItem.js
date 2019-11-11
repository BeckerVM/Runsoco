import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const DisheItem = ({ dishe }) => {

  return (  
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.containerSup}>
        <Image style={styles.img} source={require('../../../assets/images/dishe.png')}/>
        <View style={styles.containerText}>
          <Text style={styles.name}>{ dishe.name }</Text>
          <Text style={styles.ing}>{ dishe.ingredients } </Text>
        </View>
      </View>
      <View style={styles.containerInf}>
        <Text style={styles.price}>S/.{ dishe.price }.00</Text>
        <TouchableOpacity style={styles.containerIcon}>
          <Icon name="plus" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DisheItem;