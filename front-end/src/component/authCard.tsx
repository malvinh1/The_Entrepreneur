import React from 'react';
import Text from '../core-ui/Text';
import {View, StyleSheet} from 'react-native';
import { WHITE } from '../constants/color';
import TextInput from '../core-ui/textInput';
import Button from '../core-ui/Button';
import { screenWidth } from '../constants/dimens';
import { VerticalSpacer3 } from '../core-ui/Spacer';
import { AuthModel } from '../model/Auth';

type Props = {
    authModel: AuthModel
    signInAction: ()=>void;
    forgotPasswordAction: ()=>void;
    mode: 'singin'|'signup';
};

export default function AuthCard(props: Props) {
  let { mode, signInAction, forgotPasswordAction } = props;

    let { mode, signInAction, forgotPasswordAction, authModel} = props;

    const styles=StyleSheet.create({
        outer:{
            margin: 16,
            backgroundColor: WHITE,
            padding: 32,
            width: screenWidth-32,
            borderRadius: 8,
            alignContent: "stretch",
            alignItems: "center",
        },
        form:{
            minWidth: screenWidth*0.8,
            borderBottomWidth: 2, 
        },
        label:{
            color: '#C7C7C7'
        },
        right:{
            alignContent: "flex-end",
        }
    })

    return (
        <View style={styles.outer}> 
            {
                mode == 'singin' ? <Text type="headline" children="Sign In"></Text>:
                <Text type="headline" children="Sign Up"></Text>
            }
            <TextInput label="Email" placeholder="Type your email"
            containerStyle={styles.form} labelStyle={styles.label}
            onChangeText={(text)=>{
                authModel.username=text
                authModel.email = text
                }}/>
            <VerticalSpacer3/>
            <TextInput label="Password" placeholder="Type your password" isEncrypt={true}
            containerStyle={styles.form} labelStyle={styles.label}
            onChangeText={(text)=>{authModel.password = text}}/>
            <VerticalSpacer3/>
            {
                mode == 'signup' ?  <TextInput label="Repeat Password" isEncrypt={true} placeholder="Type your password again" containerStyle={styles.form} labelStyle={styles.label} onChangeText={()=>{}}/> :
                <Text children="Forgot Password" style={styles.right} onPress={forgotPasswordAction}></Text>
            }
            <VerticalSpacer3/>
            {
                mode =='signup' ? <Button buttonType="default" text="SIGN UP" onPress={()=>{}}></Button>:
                <Button buttonType="default" text="SIGN IN" onPress={signInAction}></Button>
            }
    
        </View>
    );
}
