import { StyleSheet } from 'react-native';

import Colors from '../../styles/colors';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorPrimary,
    flex: 1,
    paddingHorizontal: 10
  },
  image: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
    marginTop: 30,
    alignSelf: 'center'
  }
});