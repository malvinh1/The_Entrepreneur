import React, { Component } from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import AuthCard from '../component/authCard';
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAvoidingView} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import { k16 } from '../constants/dimens';
import LoginController from '../controller/LoginController';
import Text from '../core-ui/Text'

type Props = NavigationScreenProps
type State={}

export default class SignInScene extends Component<Props, State> {
  private loginController: LoginController;

  constructor(props: Props){
    super(props);
    this.loginController = new LoginController();
  }

  signInAction = ()=>{
    this.loginController.makeLogin();
  };

  forgotPasswordAction = ()=>{
  };

  render() {
    return (
      <View style={styles.view}>
        <KeyboardAvoidingView style={styles.view} behavior="padding" enabled>
          <LinearGradient
            style={styles.container}
            colors={['#454545', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>
              <AuthCard 
              data={this.loginController.authModel}
              signInAction={this.signInAction}
              forgotPasswordAction={this.forgotPasswordAction}
              mode="singin"></AuthCard>
            </LinearGradient>
            {
              CustomProgressBar(this.loginController.isProcessing)
            }
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function CustomProgressBar(visible: boolean){
  console.log("calling");
  return(
    <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text type="display1">Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: k16,
  },
});
