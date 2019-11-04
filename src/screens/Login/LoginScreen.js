import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

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
        </View>
      </>
    );
  }
}

export default LoginScreen;