import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';


//ESTILOS REUTILIZABLES
import { background } from '../../../styles/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: background,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  iconBar: {
    color: '#fff',
    fontSize: 25
  }
});


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
