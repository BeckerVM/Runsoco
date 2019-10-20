import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


//ESTILOS
import styles from './styles';


const LoginForm = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.textForm}>Hola otra vez :'D</Text>
      <View style={styles.containerIcons}>
        <TouchableOpacity style={[styles.btnIcons, { marginRight: 20 }]}>
          <Icon name="facebook" style={[styles.icons, styles.iconF]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnIcons}>
          <Icon name="google-plus" style={[styles.icons, styles.iconG]} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={[styles.input]} placeholder="Correo Electrónico" />
        <TextInput secureTextEntry={true} style={[styles.input, { marginTop: 15 }]} placeholder="Contraseña" />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginForm;