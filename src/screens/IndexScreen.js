import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../components/navigation/HeaderNavigation/HeaderNavigation';

//ESTILOS
import colors from '../styles/colors';
import buttons from '../styles/buttons'

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.colorPrimary,
    paddingBottom: 50,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 220,
    marginTop: 30
  },
  containerText: {
    marginTop: 40
  },
  text: {
    color: colors.colorWhite,
    textAlign: 'center',
  
  },
  primaryText: {
    fontSize: 22,
    marginBottom: 20
  },
  secondaryText: {
    fontSize: 18,
    paddingHorizontal: 55
  },
  containerBtn: {
    marginTop: 80
  },
  btn: {
    ...buttons.btnLarge,
    backgroundColor: colors.colorSecondary,
  }
});

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
            source={require('../assets/images/index-img.png')}
          />
          <View style={styles.containerText}>
            <Text style={[styles.text, styles.primaryText]}>Pide lo que te apetece desde la comodidad de tu casa.</Text>
            <Text style={[styles.text, styles.secondaryText]}>Una app sencilla, rápidas, segura, funcional y personalizable.</Text>
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: colors.colorWhite, fontSize: 18, fontWeight: '700' }}>COMIENZA AHORA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default IndexScreen;