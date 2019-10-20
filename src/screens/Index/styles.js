import { StyleSheet } from 'react-native';

import Colors from '../../styles/colors';
import Buttons from '../../styles/buttons';

export default  StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorPrimary,
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
    color: Colors.colorWhite,
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
    ...Buttons.btnLarge,
    backgroundColor: Colors.colorSecondary,
  },
  textBtn: { color: Colors.colorWhite, fontSize: 18, fontWeight: '700' }
});