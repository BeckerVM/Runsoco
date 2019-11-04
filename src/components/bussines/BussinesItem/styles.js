import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';

export default  StyleSheet.create({
  bussinesItem: {
    marginBottom: hp(1.5),
    overflow: 'hidden',
    borderRadius: wp(2)
  },
  bussinesImg: {
    width: wp(100),
    height: hp(22),
  },
  containerContent: {
    backgroundColor: Colors.colorWhite,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerDescription: {

  },
  title: {
    color: Colors.colorSecondary,
    fontWeight: 'bold',
    fontSize: hp(2.5),
  },
  date: {
    fontSize: hp(1.8)
  }
});