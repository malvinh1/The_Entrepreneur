import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import AuthCard from '../component/authCard';
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAvoidingView} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import { k16 } from '../constants/dimens';
import LoginController from '../controller/LoginController';

type Props = NavigationScreenProps
type State={}

export default class SignInScene extends Component<Props, State> {
  private loginController: LoginController;

  constructor(props: Props){
    super(props);
    this.loginController = new LoginController();
  }

  signInAction =async()=>{
    var success = await this.loginController.makeLogin()
    this.props.navigation.navigate('Home')
    if(success){
      alert("Login successfull!")
    }else{
      alert("Login fails, please check your login combinations!")
    }
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
              authModel={this.loginController.authModel}
              signInAction={this.signInAction}
              forgotPasswordAction={this.forgotPasswordAction}
              mode="singin"></AuthCard>
            </LinearGradient>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

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
