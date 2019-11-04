import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';

//ESTILOS
import styles from './styles';

class IndexScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Inicio'
  }

  render() {

    return (
      <>
        <HeaderNavigation />
        <View style={styles.screen}>
          <Text>INDEX SCREEN JEJEJE</Text>
        </View>
      </>
    );
  }
}

export default IndexScreen;