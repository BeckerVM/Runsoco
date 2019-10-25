import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


import styles from './styles';


const InfoCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{ title } </Text>
      <Text style={styles.description}>{ description }</Text>
    </View>
  );
}

export default InfoCard;
