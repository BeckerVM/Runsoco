import { StyleSheet } from 'react-native';

import Colors from '../../styles/colors';
import Buttons from '../../styles/buttons';

export default  StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorPrimary,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  image: {
    width: 250,
    height: 200,
  },
  containerText: {
  },
  text: {
    color: Colors.colorWhite,
    textAlign: 'center',
  },
  primaryText: {
    fontSize:  18,
    marginBottom: 10
  },
  secondaryText: {
    fontSize: 14,
    paddingHorizontal: 55
  },
  containerBtn: {
  },
  btn: {
    ...Buttons.btnLarge,
    backgroundColor: Colors.colorSecondary,
  },
  textBtn: { color: Colors.colorWhite, fontSize: 18, fontWeight: '700' }
});