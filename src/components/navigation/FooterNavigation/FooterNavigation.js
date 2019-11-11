import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const FooterNavigation = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.item}>
        <Icon 
          style={[styles.icon, styles.iconActive]} 
          name="utensils"
        />
        <Text style={[styles.iconText, styles.iconActive]}>Comidas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon 
          style={styles.icon}
          name="gifts"
        />
        <Text style={styles.iconText}>Ofertas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon
          style={styles.icon}
          name="id-badge"
        />
        <Text style={styles.iconText}>Contactos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterNavigation;