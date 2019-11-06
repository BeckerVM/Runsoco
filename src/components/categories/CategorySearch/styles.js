import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';

export default  StyleSheet.create({
  containerSearch: {
    backgroundColor: Colors.colorWhite,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    borderRadius: wp(1.5),
    marginBottom: hp(1)
  },
  titleSearch: {
    textAlign: 'center',
    fontSize: hp(2),
    marginBottom: hp(2),
  },
  inputSearch: {
    borderWidth: wp(.2),
    borderColor: Colors.colorBlue1,
    borderRadius: wp(1.5),
    paddingVertical: hp(.5),
    paddingHorizontal: wp(2.5),
  }
});