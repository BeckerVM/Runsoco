import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

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
      <ScrollView>
        <HeaderNavigation />
        <View style={styles.screen}>
          <Image
            style={styles.image}
            source={require('../../assets/images/index-img.png')}
          />
          <View style={styles.containerText}>
            <Text style={[styles.text, styles.primaryText]}>Pide lo que te apetece desde la comodidad de tu casa.</Text>
            <Text style={[styles.text, styles.secondaryText]}>Una app sencilla, rápidas, segura y personalizable.</Text>
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textBtn}>COMIENZA AHORA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default IndexScreen;