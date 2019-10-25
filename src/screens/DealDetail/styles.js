import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../styles/Colors';

export default StyleSheet.create({
  screen: {
    height: hp('100%'),
    paddingHorizontal: wp('8%')
  },
  title: {
    color: Colors.colorPrimary,
    fontSize: hp('3%'),
    textAlign: 'center',
    paddingVertical: wp('2%'),
  }
});