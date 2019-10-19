import React from 'react';
import { Button } from 'react-native';

//COMPONENTES
import HeaderNavigation from '../components/navigation/HeaderNavigation/HeaderNavigation';


class IndexScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Inicio'
  }

  render() {
    const {  navigation } = this.props;

    return (
      <>
        <HeaderNavigation />
        <Button 
          onPress={() => navigation.navigate('Test')}
          title="Go Test Screen"
        />
        <Button
        onPress={() => navigation.openDrawer()}
        title="Open Drawer"
      />
      </>
    );
  }
}

export default IndexScreen;