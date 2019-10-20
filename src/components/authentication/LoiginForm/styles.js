import { StyleSheet } from 'react-native';

import Colors from '../../../styles/colors';
import Buttons from '../../../styles/buttons';

export default StyleSheet.create({
  form: {
    backgroundColor: Colors.colorWhite,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  textForm: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900'
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  btnIcons: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  icons: {
    fontSize: 20,
  },
  iconF: {
    color: 'navy'
  },
  iconG: {
    color: 'red'
  },
  containerInputs: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    padding: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  containerBtn: {
    marginTop: 20,
    alignItems: 'center'
  },
  btn: {
    ...Buttons.btnLarge,
    backgroundColor: Colors.colorSecondary,
  },
  btnText: {
    color: Colors.colorWhite,
    textAlign: 'center'
  }
});