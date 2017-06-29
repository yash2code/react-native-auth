import React, { Component } from 'react'
import {View, Text, Alert, StyleSheet} from 'react-native'

import AuthScreen from './containers/AuthScreen'
import HomeScreen from './containers/HomeScreen'
import PhoneAuth from './containers/AuthScreen/PhoneAuth'
//import axios from 'axios'



export class LoginAnimation extends Component {

  constructor(props) {
    super(props);
  
    console.log(this.props)
  }

  state = {
    isLoggedIn: false, 
    isLoading: false, 
    isAppReady: false ,
    token:false,
    button:true,
    alert:false
  }

  alert_fun(){
  //  const { isLoading, onSignupLinkPress, onLoginPress, token, button } = this.props
if(this.state.alert==true){
  Alert.alert(
  'Ooops!!!',
  'Wrong Credentials!',
  [
   // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => {

     // this.props.button=true

      console.log('hey')
    }},
  ],
  { cancelable: false }
)
}
}

  

  
  _simulateLogin = (username, password) => {

     //console.log();
     fetch('https://aksout.com/api/authenticate', {
           method: 'POST',
            headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     // 'Authorization':'Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE0NywiaXNzIjoiaHR0cHM6XC9cL2Frc291dC5jb21cL2FwaVwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDk2MjM3MDcxLCJleHAiOjE0OTYyNDA2NzEsIm5iZiI6MTQ5NjIzNzA3MSwianRpIjoiVGdBZGZQNjBMS3k5QlVRZiJ9.VXBPZWBEamIwSIXvyk80XyiYJg2WcyfrldmUBUjJ1XQ'
  },
   body: JSON.stringify({
    username: username,
    password: password,
  })
      }).then((response) => response.json())
        .then((responseJSON) => {

          console.log(responseJSON.token);
             if(responseJSON.token)
            {  this.setState({token:true, alert:false})  }
            console.log(this.state.token)
            
        if(this.state.token==true){
    this.setState({ isLoading: true, alert:false })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
    }else{this.setState({button:false, alert:true})}
      })
        .catch(e=>console.error(e))
    
        

       

  }

  _simulateSignup = (username, password, fullName) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false, token:false }), 1000)
  }

  
  render () {
    const {navigate} = this.props.navigation
    if (this.state.isAppReady) {
     /* return (
        <HomeScreen
          logout={() => this.setState({ isLoggedIn: false, isAppReady: false, token:false })}
          navigate = {navigate}
        />
      )*/
      return ( 
        <PhoneAuth navigate={navigate}/>

        )
    } 
   else {
      return (
        <View style={styles.container}>
        <AuthScreen
          login={this._simulateLogin}
          signup={this._simulateSignup}
          isLoggedIn={this.state.isLoggedIn}
          isLoading={this.state.isLoading}
          token={this.state.token}
          button={this.state.button}
          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
          navigate={navigate}
        />
        {this.alert_fun()}
       </View>
      )
    }
  }
}

export default LoginAnimation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:'wrap',
    backgroundColor: '#F5FCFF',
  },

  });
