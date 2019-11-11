import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../styles/Colors';
import Shadows from './../../styles/Shadows';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorGray1,
    paddingTop: hp(1.5),
    height: hp(74.8),
  },
  containerTitle: {
    backgroundColor: Colors.colorTerciary,
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    width: wp(70),
    alignSelf: 'center',
    paddingVertical: hp(2),
    ...Shadows.shadowNormal,
    marginBottom: hp(2)
  },
  title: {
    color: Colors.colorSecondary,
    fontWeight: 'bold',
    fontSize: hp(2.7),
    textAlign: 'center'
  },
  date: {
    color: Colors.colorSecondary,
    textAlign: 'center',
    fontSize: hp(2.3)
  },
  listDihes: {
    paddingHorizontal: wp(1.5)
  }
});