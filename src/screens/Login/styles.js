import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../styles/Colors';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorPrimary,
    flex: 1,
    paddingHorizontal: wp('3%'),
    justifyContent: 'space-around'
  },
  image: {
    width: wp('70%'),
    height: hp('35%'),
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});