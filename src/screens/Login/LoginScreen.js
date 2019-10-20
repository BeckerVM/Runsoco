import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


//COMPONENTES
import HeaderNavigation from '../../components/navigation/HeaderNavigation/HeaderNavigation';
import LoginForm from './../../components/authentication/LoiginForm/LoginForm';

//ESTILOS
import styles from './styles';


class LoginScreen extends React.Component {
  
  static navigationOptions = {
    drawerLabel: 'Logueo'
  }

  render() {
    return (
      <>
        <HeaderNavigation />
        <View style={styles.screen}>
          <LoginForm />
          <Image  
            style={styles.image}
            source={require('../../assets/images/image-login.png')} 
          />
        </View>
      </>
    );
  }
}

export default LoginScreen;