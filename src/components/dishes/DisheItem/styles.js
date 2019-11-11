
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';
import shadows from '../../../styles/Shadows';

export default StyleSheet.create({
  containerItem: {
    backgroundColor: Colors.colorWhite,
    ...shadows.shadowNormal,
    marginBottom: hp(2),
    borderRadius: wp(.5),
    padding: wp(3)
  },
  containerSup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5)
  },
  img: {
    width: wp(30),
    height: hp(10),
    resizeMode: 'cover'
  },
  containerText: {
    flex: 1,
    paddingHorizontal: wp(2)
  },
  name: {
    color: Colors.colorPrimary,
    fontSize: hp(2.5)
  },
  ing: {
    fontSize: hp(2)
  },
  containerInf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    alignItems: 'center'
  },
  price: {
    fontSize: hp(2.5),
    fontWeight: 'bold'
  },
  containerIcon: {
    backgroundColor: Colors.colorTerciary,
    width: wp(10),
    height: wp(10),
    borderRadius: wp(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: hp(2.5),
    color: Colors.colorPrimary,
  }
});