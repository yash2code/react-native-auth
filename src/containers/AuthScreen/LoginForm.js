import React, { Component, PropTypes } from 'react'
import { LayoutAnimation, Platform, StyleSheet, UIManager } from 'react-native'
import { Text, View } from 'react-native-animatable'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import metrics from '../../config/metrics'

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)

export default class LoginForm extends Component {

constructor(props) {
  super(props);
  console.log(props);


}


  
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoginPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired
  }

  state = {
     username:'',
    password: '',
    button:true
    
  }

 
/*alert_fun(){
    const { isLoading, onSignupLinkPress, onLoginPress, token, button } = this.props

  Alert.alert(
  'Ooops!!!',
  'Wrong Credentials!',
  [
   // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => {

      this.props.button=true

      console.log(this.props)
    }},
  ],
  { cancelable: false }
)
}*/
   


 
   


/*doLogin(){
  console.log(this.state)
  axios.post('https://aksout.com/api/authenticate', JSON.stringify(this.state))   
   .then(response => {
      console.log(response);
     // USER_TOKEN = response.data.token;
      console.log('userresponse ' + response.data.token); 
    })   
   .catch((error) => {
      console.log('error ' + error);   
   });
}*/



/*const AuthStr = 'Bearer '.concat(USER_TOKEN); 
axios.get(URL, { headers: { Authorization: AuthStr } })
 .then(response => {
     // If request is good...
     console.log(response.data);
  })
 .catch((error) => {
     console.log('error ' + error);
  });*/

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {

    
    const { navigate } = this.props 
    const { username, password } = this.state
    const { isLoading, onSignupLinkPress, onLoginPress, token, button } = this.props
    const isValid = username !== '' && password !== ''
    if(this.props.token==false && this.props.button==true){
    return (
      <View style={styles.container}>
        <View 
        style={styles.form} 
        ref={(ref) => { this.formRef = ref }}
        >
          <CustomTextInput
            name={'email'}
            ref={(ref) => this.usernameInputRef = ref}
            placeholder={'Username or Email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ username: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'go'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
             <CustomButton
              onPress={()=>onLoginPress(username, password)}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              text={'Log In'}
            />
          </View>
          <View style={styles.Link}>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signupLink} 
            onPress={onSignupLinkPress}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Not registered yet?'}
          </Text>
           <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.forgetLink}
            animation={'fadeIn'}
            duration={600}
            delay={400}
            onPress={() => this.props.navigate('Forget')}
          >
            {'Forget password?'}
          </Text>
          </View>
        </View>
      </View>
    )
  }
  else{

    return (
      <View style={styles.container}>
     
        <View 
        style={styles.form} 
        ref={(ref) => { this.formRef = ref }}
        >
          <CustomTextInput
            name={'email'}
            ref={(ref) => this.usernameInputRef = ref}
            placeholder={'Username or Email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ username: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'go'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
             <CustomButton
              onPress={() => this.props.navigate('PhoneAuth')}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              text={'Log In'}
            />

          </View>
          <View style={styles.Link}>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signupLink} 
            onPress={onSignupLinkPress}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Not registered yet?'}
          </Text>
           <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.forgetLink}
            onPress={() => this.props.navigate('Forget')}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Forget password?'}
          </Text>
          </View>
        </View>
      </View>
    )

  }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'white'
  },
  loginButtonText: {
    color: '#212121',
    fontWeight: 'bold'
  },
  signupLink: {
    color: 'rgba(255,255,255,0.6)',
    //alignSelf: 'center',
    padding: 20,
    
  },
  Link: {
    flexDirection:'row'
   },
   forgetLink: {
    color: 'rgba(255,255,255,0.6)',
    padding: 20,
    
  },
})
