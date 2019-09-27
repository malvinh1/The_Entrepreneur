import React from 'react';
import { StyleSheet, View } from 'react-native';

import { WHITE } from '../constants/color';
import Texts from '../core-ui/Text';
import Button from '../core-ui/Button';
import { VerticalSpacer2, VerticalSpacer4 } from '../core-ui/Spacer';
import { screenWidth } from '../constants/dimens';

type Props = {
  signUpAction: ()=>void;
  loginGoogleAction: ()=>void;
  loginAction:()=>void;
};

export default function WelcomeCard(props: Props) {
  let { signUpAction,loginGoogleAction,loginAction } = props;

  const styles = StyleSheet.create({
    card: {
      margin: 16,
      backgroundColor: WHITE,
      padding: 32,
      width: screenWidth-32,
      borderRadius: 8,
      alignContent: "stretch",
      alignItems: "center",
    },
    lineStyle: {
      borderWidth: 0.5,
      borderColor: 'black',
      margin: 5,
    },
  });

  return (
    <View style={styles.card}>
      <Texts
        children="Welcome, Entrepreneurs!"
        type="headline"
      ></Texts>
      <VerticalSpacer4></VerticalSpacer4>
      <Button
        buttonType="default"
        onPress={signUpAction}
      />
      <VerticalSpacer2></VerticalSpacer2>
      <Texts
        children="─────────── or ───────────"
        type="display2"
      ></Texts>
      <VerticalSpacer2></VerticalSpacer2>
      <Button
        buttonType="outline"
        onPress={() => loginGoogleAction}
      />
      <VerticalSpacer2></VerticalSpacer2>
      <Texts
        children="Already have an account? Login here"
        type="display1"
        onPress={loginAction}
      ></Texts>
    </View>
  );
}
