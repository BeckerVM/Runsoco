import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../styles/Colors';
import Buttons from '../../styles/Buttons';

export default  StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorPrimary,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp('5%')
  },
  image: {
    width: wp('70%'),
    height: hp('30%')
  },
  containerText: {
  },
  text: {
    color: Colors.colorWhite,
    textAlign: 'center',
  },
  primaryText: {
    fontSize:  hp('3.5%'),
    marginBottom: wp('2%')
  },
  secondaryText: {
    fontSize: hp('2.3%'),
    paddingHorizontal: wp('10%')
  },
  containerBtn: {
  },
  btn: {
    ...Buttons.btnLarge,
    backgroundColor: Colors.colorSecondary,
  },
  textBtn: { color: Colors.colorWhite, fontSize: hp('3%'), fontWeight: '700' }
});