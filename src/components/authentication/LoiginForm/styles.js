import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../../styles/Colors';
import Buttons from '../../../styles/Buttons';


export default StyleSheet.create({
  form: {
    backgroundColor: Colors.colorWhite,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('2.5%')
  },
  textForm: {
    textAlign: 'center',
    fontSize: hp('3%'),
    fontWeight: '900'
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: wp('5%')
  },
  btnIcons: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4.5%'),
    paddingVertical: wp('2%')
  },
  icons: {
    fontSize: hp('3.5%'),
  },
  iconF: {
    color: 'navy'
  },
  iconG: {
    color: 'red'
  },
  containerInputs: {
    marginTop: wp('5%')
  },
  input: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    padding: wp('1%'),
    borderRadius: wp('2%'),
    paddingHorizontal: wp('3%'),
    fontSize: hp('2.3%')
  },
  containerBtn: {
    marginTop: wp('10%'),
    alignItems: 'center'
  },
  btn: {
    ...Buttons.btnLarge,
    backgroundColor: Colors.colorSecondary,
  },
  btnText: {
    color: Colors.colorWhite,
    textAlign: 'center',
    fontSize: hp('2.5%')
  }
});