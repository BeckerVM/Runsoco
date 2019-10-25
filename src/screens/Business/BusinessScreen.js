import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';

//ESTILOS
import styles from './styles';


class BusinessScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Negocios'
  }

  state = {
    business: [
      {
        id: '1',
        urlImg: '../../assets/images/img1.jpg',
        name: 'Gustitos del Cura',
        initialDate: '10:00 a.m',
        finalDate: '9:00 p.m',
        price: 5.00
      },
      {
        id: '2',
        urlImg: '../../assets/images/img1.jpg',
        name: 'El Horcon',
        initialDate: '10:00 a.m',
        finalDate: '9:00 p.m',
        price: 5.00
      },
      {
        id: '3',
        urlImg: '../../assets/images/img1.jpg',
        name: 'Refrigerios Copazu',
        initialDate: '10:00 a.m',
        finalDate: '9:00 p.m',
        price: 5.00
      },
      {
        id: '4',
        urlImg: '../../assets/images/img1.jpg',
        name: 'Polleria Doña Yola',
        initialDate: '10:00 a.m',
        finalDate: '9:00 p.m',
        price: 5.00
      }
    ]
  }

  render() {
    const { business } = this.state;

    return (
      <>
        <HeaderNavigation />
        <View style={styles.screen}>
          <FlatList 
            keyExtractor={(item) => item.id}
            data={business}
            renderItem={({ item }) => 
              <View>
                
                <View>
                  <Text>{ item.name }</Text>
                  <Text>{ item.price }</Text>
                  <Text>{ item.initialDate }-{ item.finalDate }</Text>
                </View>
              </View>
            }
          />
        </View>
      </>
    );
  }
}

export default BusinessScreen;