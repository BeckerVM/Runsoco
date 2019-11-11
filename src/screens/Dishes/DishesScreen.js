import React from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';
import FooterNavigation from './../../components/navigation/FooterNavigation/FooterNavigation';
import MenuTypes from './../../components/dishes/MenuTypes/MenuTypes';
import DisheItem from '../../components/dishes/DisheItem/DisheItem';
//ESTILOS
import styles from './styles';

class DishesScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Platos'
  }

  render() {

    return (
      <>
        <HeaderNavigation />
        <View style={styles.screen}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Pizzeria - Restaurant</Text>
            <Text style={styles.title}>EL HORCON</Text>
            <Text style={styles.date}>10:00 a.m a 09:00 p.m</Text>
          </View>
          <MenuTypes />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listDihes}
            data={[
              {
                id: '1',
                name: 'Pizza Linda Andahuaylina',
                ingredients: 'Queso, tomate, brocoli y Jr se la come',
                price: 30.00
              },
              {
                id: '2',
                name: 'Pizza Linda Andahuaylina',
                ingredients: 'Queso, tomate, brocoli y Jr se la come',
                price: 30.00
              },
              {
                id: '3',
                name: 'Pizza Linda Andahuaylina',
                ingredients: 'Queso, tomate, brocoli y Jr se la come',
                price: 30.00
              },
              {
                id: '4',
                name: 'Pizza Linda Andahuaylina',
                ingredients: 'Queso, tomate, brocoli y Jr se la come',
                price: 30.00
              }
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <DisheItem dishe={item} />
            } 
          />
        </View>
        <FooterNavigation />
      </>
    );
  }
}

export default DishesScreen;