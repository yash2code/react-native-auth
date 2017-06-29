import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'

import CustomButton from '../../components/CustomButton'
import metrics from '../../config/metrics'

export default class Opening extends Component {
  static propTypes = {
    onCreateAccountPress: PropTypes.func.isRequired,
    onSignInPress: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <View animation={'zoomIn'} delay={1500} duration={500}>
          <CustomButton
            text={'Create Account'}
            onPress={this.props.onCreateAccountPress}
            buttonStyle={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
          />
        </View>
        <View style={styles.separatorContainer} animation={'zoomIn'} delay={1900} duration={100}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorOr}>{'Or'}</Text>
          <View style={styles.separatorLine} />
        </View>
        <View animation={'zoomIn'} delay={1700} duration={400}>
          <CustomButton
            text={'Sign In'}
            onPress={this.props.onSignInPress}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.DEVICE_WIDTH * 0.1,
    justifyContent: 'center',
  },
  createAccountButton: {
    backgroundColor: '#00BCD4',
  },
  createAccountButtonText: {
    color: 'white'
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#BDBDBD'
  },
  separatorOr: {
    color: '#757575',
    marginHorizontal: 8
  },
  signInButton: {
    backgroundColor: '#00BCD4'
  },
  signInButtonText: {
    color: 'white'
  }
})
