import React, { Component } from 'react'
import { Alert, LayoutAnimation, Platform, StyleSheet, UIManager } from 'react-native'
import { Text, View} from 'react-native-animatable'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import metrics from '../../config/metrics'

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.6

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)



export default class Forget extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {

	  	msg:' ',
	  	email:' '
	  };
	}


	 static navigationOptions = {
    tabBarLabel: 'Forget',
  }

send_mail = () => {

		fetch('https://aksout.com/api/forget', {
			method:'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json',
			},
				body: JSON.stringify({
				email: this.state.email,
			})
		}).then((response) => response.json())
			.then((responseJSON) => {
				console.log(responseJSON);
				this.setState({ 

					msg:responseJSON.msg

				})

				Alert.alert(
						'Info',
						this.state.msg,
						[

						{text: 'OK' },
						],

					{ cancelable: false }
					)
			}).catch(e=>console.error(e))

			}

	render(){

		const {navigate} = this.props.navigation

		return(

				<View style={styles.container}>
				
        <View 
        style={styles.form} 
        ref={(ref) => { this.formRef = ref }}
        >
          <CustomTextInput
            name={'email'}
            ref={(ref) => this.usernameInputRef = ref}
            placeholder={'Enter your Email'}
            keyboardType={'email-address'}
          
            returnKeyType={'go'}
            blurOnSubmit={false}
            withRef={true}
           onChangeText={(value) => this.setState({ email: value })}
    
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
             <CustomButton
              onPress={this.send_mail.bind(this)}
             
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              text={'Send me Reset link'}
            />
          </View>
          <View style={styles.Link}>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.forgetLink}
           onPress={() => this.props.navigation.navigate('Initial')}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Go Home'}
          </Text>
          </View>
        </View>
        	
       
     </View>

			)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: 'rgba(19, 35, 47, 0.9)',
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
    flexDirection:'row',
    alignSelf:'center',
   },
   forgetLink: {
    color: 'rgba(255,255,255,0.6)',
    padding: 20,
    
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical:null,
  },
  form: {
  	 paddingHorizontal: metrics.DEVICE_WIDTH * 0.1,
  }
})
