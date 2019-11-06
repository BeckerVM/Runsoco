import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../styles/Colors';
import Inputs from '../../../styles/Inputs';

export default StyleSheet.create({
  form: {
    backgroundColor: Colors.colorWhite,
    borderRadius: wp(.5),
    padding: wp(5)
  },
  title: {
    textAlign: 'center',
    fontSize: hp(2),
    fontWeight: 'bold',
    color: Colors.colorSecondary,
    marginBottom: hp(2)
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerIcon: {
    borderWidth: wp(.5),
    borderColor: Colors.colorGray1,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
  },
  containerIconG: {
    marginLeft: wp(5)
  },
  icon: {
    fontSize: hp(3)
  },
  iconF: {
    color: 'navy'
  },
  iconG: {
    color: 'crimson'
  },
  input: {
    ...Inputs.inputNormal,
    borderColor: Colors.colorBlue1
  },
  containerInputs: {
    marginTop: hp(3)
  },
  textBtn: {
    color: Colors.colorSecondary,
    fontSize: hp(2.5),
    textAlign: 'center',
    fontWeight: 'bold'
  }
});