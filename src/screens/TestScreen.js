import React from 'react';
import { Button } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../components/navigation/HeaderNavigation/HeaderNavigation';


class TestScreen extends React.Component {
  
  static navigationOptions = {
    drawerLabel: 'Test'
  }

  render() {
    const { navigation } = this.props
    return (
      <>
        <HeaderNavigation />
        <Button
          onPress={() => navigation.goBack()}
          title="Go back home"
        />
      </>
    );
  }
}

export default TestScreen;