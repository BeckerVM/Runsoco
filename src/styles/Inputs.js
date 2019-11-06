import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const inputs = {
  inputNormal: {
    borderWidth: wp(.25),
    marginBottom: hp(2.5),
    borderRadius: wp(2),
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(.5),
  }
}

export default inputs;