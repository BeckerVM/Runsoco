import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.colorWhite,
    borderRadius: wp('1%'),
    marginBottom: wp('5%'),
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: wp('6%')
  },
  title: {
    color: Colors.colorPrimary,
    textAlign: 'center',
    fontSize: wp('4.6%'),
    marginBottom: wp('2%')
  },
  description: {
    fontSize: wp('4%'),
    textAlign: 'center'
  }
});