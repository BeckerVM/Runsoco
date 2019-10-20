import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';


//ESTILOS
import styles from './styles';


const HeaderNavigation = ({ navigation }) => {
  return (
   <View style={styles.header}>
     <Text></Text>
     <Text style={styles.title}>RUNSOCO</Text>
     <TouchableOpacity
      onPress={() => navigation.openDrawer()}
     >
       <Icon 
        name="bars" 
        style={styles.iconBar}
      />
     </TouchableOpacity>
     
   </View>
  );
}


export default withNavigation(HeaderNavigation);
