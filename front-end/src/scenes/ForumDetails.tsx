import React, { Component } from 'react';
import { NavigationScreenProps } from "react-navigation";
import Text from "../core-ui/Text";


type Props = NavigationScreenProps;

type State = {};

export default class ForumDetails extends Component{
    props!: Props;

    render() {
        console.log(this.props.navigation.getParam('id'))
        return (
           <Text>TEEE</Text>
        )
    }
}