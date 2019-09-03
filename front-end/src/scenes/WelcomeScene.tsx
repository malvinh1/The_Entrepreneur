import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AuthCard from '../cards/authCard';
import { BLACK } from '../constants/color';

type Props = {};
type State = {};

export default class WelcomeScene extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <AuthCard mode="singin"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
