import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../styles/Colors';
import Buttons from '../../styles/Buttons';

export default  StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorPrimary,
    height: hp(91.4),
  }
});