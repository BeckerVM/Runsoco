import React from 'react';
import { View, ScrollView, Text } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';
import CategorySearch from './../../components/categories/CategorySearch/CategorySearch';
import CategoryItem from './../../components/categories/CategoryItem/CategoryItem';
//ESTILOS
import styles from './styles';

class CategoriesScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Categorias'
  }

  render() {

    return (
      <>
        <HeaderNavigation />
        <View style={styles.screen}>
          <CategorySearch />
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.containerItems}>
              <CategoryItem name="Polleria"/>
              <CategoryItem name="Pasteleria"/>
              <CategoryItem name="Pizzeria"/>
              <CategoryItem name="Licoreria"/>
              <CategoryItem name="Hamburgueria"/>
              <CategoryItem name="Panaderia"/>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default CategoriesScreen;
