import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

//ESTILOS
import styles from './styles';

const HeaderNavigation = ({ navigation }) => {
  return (
   <View style={styles.header}>
     <Text></Text>
     <View style={styles.containerTitle}>
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.imgLogo}
        />
        <Text style={styles.title}>unsoco</Text>
      </View>
     <TouchableOpacity 
      style={styles.containerIcon}
      onPress={() => navigation.openDrawer()}
     >
       <Icon
        style={styles.icon}
        name="menu"
       />
     </TouchableOpacity>
   </View>
  );
}


export default withNavigation(HeaderNavigation);
