
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  containerItem: {
    backgroundColor: Colors.colorWhite,
    width: wp(46),
    marginBottom: hp(2),
    borderRadius: wp(.8),
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  img: { width: wp(100), height: hp(15) },
  title: {
    padding: wp(2.5),
    color: Colors.colorSecondary,
    fontWeight: 'bold',
    fontSize: hp(2),
    textAlign: 'center'
  }
});