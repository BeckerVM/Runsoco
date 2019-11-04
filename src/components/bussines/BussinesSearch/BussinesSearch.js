import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const BussinesSearch = ({ type }) => {

  return (  
    <View style={styles.containerSearch}>
      <Text style={styles.titleSearch}>{ type }</Text>
      <TextInput
        style={styles.inputSearch} 
        placeholder="Buscar"
      />
    </View>
  );
};

export default BussinesSearch;