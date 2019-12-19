import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

export default class Checkout extends Component {
  constructor(props){
    super(props)
  }
  _onPressButton(){
    let options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: '100',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
        onPress={this._onPressButton}
        title="Pay"
        color="white"
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    marginLeft: 160,
    backgroundColor: 'blue',
    width: 80
  },
 inputContainer: {
   height: 40,
   borderColor: 'gray', 
   borderWidth: 1,
   width: 200,
   marginBottom: 40,
   marginLeft: 97,
   paddingLeft: 10
  }
});