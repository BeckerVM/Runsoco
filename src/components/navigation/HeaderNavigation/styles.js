import { StyleSheet } from 'react-native';

import Colors from '../../../styles/colors';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.colorPrimary,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    color: Colors.colorWhite
  },
  iconBar: {
    color: Colors.colorWhite,
    fontSize: 25
  }
});