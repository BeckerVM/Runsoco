import React from 'react';
import { ScrollView, Text } from 'react-native';


//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';
import FooterNavigation from './../../components/navigation/FooterNavigation/FooterNavigation';
import InfoCard from './../../components/DealDetail/InfoCard/InfoCard';
//ESTILOS
import styles from './styles';


class DealDetailScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Negocio detalle'
  }

  render() {

    return (
      <>
        <HeaderNavigation />
        <ScrollView style={styles.screen}>
          <Text style={styles.title}>Pizzeria - Restaurant EL HORCON</Text>
          <InfoCard 
            title="Horario de atencion"
            description="Lunes a Domingo de 9 AM a 4 PM"
          />
          <InfoCard 
            title="Informes y reservas"
            description="986764680" 
          />
          <InfoCard 
            title="Correo electrónico" 
            description="elhorcon@hotmail.com"
          />
          <InfoCard 
            title="Dirección"
            description="Av. Antes de llegar a la Plaza de Armas"
          />
        </ScrollView>
        <FooterNavigation />
      </>
    );
  }
}

export default DealDetailScreen;