import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//ESTILOS

//facebook - google-plus
import styles from './styles';

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>HOLA OTRA VEZ :D</Text>
      <View style={styles.containerIcons}>
        <TouchableOpacity style={styles.containerIcon}>
          <Icon name="facebook" style={[styles.icon, styles.iconF]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerIcon, styles.containerIconG]}>
          <Icon name="google-plus" style={[styles.icon, styles.iconG]}/>
        </TouchableOpacity>
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input} placeholder="Correo electrónico"/>
        <TextInput style={styles.input} placeholder="Contraseña"/>
        <TouchableOpacity>
          <Text style={styles.textBtn}>INICIA SESIÓN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginForm;