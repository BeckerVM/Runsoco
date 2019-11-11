import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const MenuTypes = () => {
  return (
    <FlatList
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item.id}
      data={[
        { id: '1', type: 'Familiar', active: true },
        { id: '2', type: 'Individual' },
        { id: '3', type: 'Pareja' },
        { id: '4', type: 'Especial' },
        { id: '5', type: 'Extras' },
        { id: '6', type: 'Otros' },
        { id: '7', type: 'Mas' },
      ]}
      renderItem={({ item }) =>
        <TouchableOpacity>
          <Text
            style={[styles.option, item.active ? styles.active : null]}
          >
            { item.type }
          </Text>
        </TouchableOpacity>
      }
    />
  );
}

export default MenuTypes;