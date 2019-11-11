import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../../styles/Colors';


export default StyleSheet.create({
  footer: {
    backgroundColor: Colors.colorWhite,
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    height: hp('11%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%')
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('22%')
  },
  icon: {
    fontSize: hp('3.5%'),
    color: Colors.colorGray2
  },
  iconActive: {
    color: Colors.colorPrimary
  },
  iconText: {
    fontSize: hp('2.2%')
  }
});