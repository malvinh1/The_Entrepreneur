import React, { Component } from 'react';
import { NavigationScreenProps, NavigationActions, StackActions } from 'react-navigation';
import { View, StyleSheet} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { screenHeight, k8, k24, k16 } from '../constants/dimens';
import { ScrollView } from 'react-native-gesture-handler';
import { BLACK, GRAY5 } from '../constants/color';
import Text from '../core-ui/Text'
import { VerticalSpacer2, VerticalSpacer1 } from '../core-ui/Spacer';

type Props = NavigationScreenProps;
type State = {};


export default class EventDetailsScene extends Component<Props, State>{
    render(){
        return (<ScrollView>
            <View>
                <Slideshow 
                    height={screenHeight/3}
                    dataSource={[
                        { url:'http://placeimg.com/640/480/any' },
                        { url:'http://placeimg.com/640/480/any' },
                        { url:'http://placeimg.com/640/480/any' }
                    ]}/>
            </View>
            <View style={styles.titleContent}>
                <Text type="headline" color="white">Talkshow Menjadi Orang Miskin</Text>
                <VerticalSpacer1></VerticalSpacer1>
                <Text type="subheading" color="white">23 September 2019</Text>
                <VerticalSpacer1></VerticalSpacer1>
                <Text type="subheading" color="white">Hotel Santika</Text>
                <VerticalSpacer1></VerticalSpacer1>
                <Text type="subheading" color="yellow">Rp 220.000</Text>
                <VerticalSpacer1></VerticalSpacer1>
            </View>
        </ScrollView>)
    }
}

const styles = StyleSheet.create({
    titleContent:{
        padding: k16,
        backgroundColor: GRAY5,
    }
})