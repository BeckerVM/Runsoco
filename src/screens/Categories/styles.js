import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../styles/Colors';;

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorGray1,
    height: hp(91.4),
    paddingHorizontal: wp(2.5),
    paddingTop: hp(1.5),
    flex: 1
  },
  containerItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: hp(2.5)
  }
});