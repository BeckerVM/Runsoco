import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


import styles from './styles';

const BussinesItem = () => {

  return (  
    <View style={styles.bussinesItem}>
      <Image
        style={styles.bussinesImg}
        source={require('../../../assets/images/img1.jpg')} 
      />
      <View style={styles.containerContent}>
        <View style={styles.containerDescription}>
          <Text style={styles.title}>Gustitos del cura</Text>
          <Text style={styles.date}>10:00 a.m a 9:00 p.m</Text>
        </View>
        <TouchableOpacity>
          <Text>ICON</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BussinesItem;