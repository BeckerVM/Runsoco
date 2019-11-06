import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const CategorySearch = () => {

  return (  
    <View style={styles.containerSearch}>
      <Text style={styles.titleSearch}>Categorias</Text>
      <TextInput
        style={styles.inputSearch} 
        placeholder="Buscar"
      />
    </View>
  );
};

export default CategorySearch;