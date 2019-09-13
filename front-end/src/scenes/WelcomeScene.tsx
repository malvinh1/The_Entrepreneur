import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeCard from '../component/WelcomeCard';
import { LinearGradient } from 'expo-linear-gradient';
import Image from '../core-ui/Image';

import {NavigationScreenProps} from 'react-navigation';

type Props = NavigationScreenProps
type State = {};

export default class WelcomeScene extends Component<Props, State> {
  loginAction = ()=>{this.props.navigation.navigate('SignIn')}
  signUpAction = ()=>{this.props.navigation.navigate('SignUp')}


  render() {
    return (
      <View style={styles.view}>
        <LinearGradient
          style={styles.container}
          colors={['#454545', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
            <Image></Image>
            <WelcomeCard signUpAction={this.signUpAction} loginAction={this.loginAction}></WelcomeCard>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16
  },
});
