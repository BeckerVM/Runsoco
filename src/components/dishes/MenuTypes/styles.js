
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  option: {
    padding: wp(1.5),
    fontSize: hp(2.3),
  },
  active: {
    borderBottomWidth: wp(.7),
    borderColor: Colors.colorPrimary,
    color: Colors.colorPrimary
  },
  list: {
    marginBottom: hp(2)
  }
});