import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.colorPrimary,
    height: hp('9%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
  },
  title: {
    fontSize: hp('3.2%'),
    color: Colors.colorWhite
  },
  iconBar: {
    color: Colors.colorWhite,
    fontSize: hp('3.5%'),
    width: wp('8%'),
    height: hp('5%'),
    textAlign: 'center',
    paddingTop: wp('1%'),
  }
});