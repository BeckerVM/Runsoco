import React from 'react';
import { View, FlatList } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';
import BussinesSearch from '../../components/bussines/BussinesSearch/BussinesSearch';
import BussinesItem from './../../components/bussines/BussinesItem/BussinesItem';
//ESTILOS
import styles from './styles';


const bussines = [
  { id: '1', urlImage: '../../assets/images/img1.jpg', dateInitial: '10:00', dateFinal: '9:00' },
  { id: '2', urlImage: '../../assets/images/img3.jpg', dateInitial: '10:00', dateFinal: '9:00' },
  { id: '3', urlImage: '../../assets/images/img2.jpg', dateInitial: '10:00', dateFinal: '9:00' },
  { id: '4', urlImage: '../../assets/images/img1.jpg', dateInitial: '10:00', dateFinal: '9:00' }
];

class BussinesScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Negocios'
  }

  render() {

    return (
      <>
        <HeaderNavigation />
        <View style={styles.screen}>
          <BussinesSearch
            type="Pizzerìas" 
          />
          <FlatList
            data={bussines}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
              <BussinesItem />
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      </>
    );
  }
}

export default BussinesScreen;