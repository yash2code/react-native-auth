import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import LoginAnimation from './src/LoginAnimation'
import { TabNavigator } from "react-navigation"
import { Constants } from 'expo'
import SignupForm from './src/containers/AuthScreen/SignupForm'
import SignupForm2 from './src/containers/AuthScreen/SignupForm2'
import PhoneAuth from './src/containers/AuthScreen/PhoneAuth'
import Forget from './src/containers/AuthScreen/forget'

const MainScreenNavigator = TabNavigator({
  Initial: { screen: LoginAnimation },
  PhoneAuth:{ screen : PhoneAuth},
  SignupForm2:{ screen: SignupForm2},
  Forget:{ screen: Forget },
}, {
  navigationOptions: {
  tabBarVisible: false,

 },
  swipeEnabled:false,

 
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F5FCFF',
  }
});
