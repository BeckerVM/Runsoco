import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  header: {
    height: hp(9.6),
    backgroundColor: Colors.colorPrimary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp(7)
  },
  title: {
    fontSize: hp(3),
    fontStyle: 'italic',
    color: Colors.colorWhite,
    fontWeight: 'bold'
  },
  containerIcon: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  icon: {
    color: Colors.colorWhite,
    fontSize: hp(4)
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(10)
  },
  imgLogo: {
    width: wp(11),
    height: wp(11),
    marginRight: wp(-2),
    marginTop: hp(-2),
  }
});