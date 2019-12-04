import React, { Component } from 'react';
import { NavigationScreenProps } from "react-navigation";
import Text from "../core-ui/Text";
import { ForumSaga } from '../sagas/forumsSaga';
import { ForumData } from '../model/forum';
import { any } from 'prop-types';
import { View,StyleSheet, ActivityIndicator } from 'react-native';
import { k8, k24, screenWidth} from '../constants/dimens';
import Image from '../core-ui/Image';
import { VerticalSpacer2, VerticalSpacer1 } from '../core-ui/Spacer';
import CommentCard from '../component/commentCard';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '../core-ui/Icon';
import { GRAY, headerBarColor } from '../constants/color';
import {month_names} from '../constants/data';

type Props = NavigationScreenProps;

export default class ForumDetails extends Component{
    forumSaga: ForumSaga = new ForumSaga
    props!: Props;
    state={
        error: any,
        data: null,
    }

    date!: Date;

    async componentDidMount(){
        this.setState(await this.forumSaga.doGetForumDetails(
            this.props.navigation.getParam('id')
        ))
    } 
    
    render() {
        if(this.state.data == null) return (
            <ActivityIndicator style={styles.loading} size="large" color={headerBarColor} />
        )
        else if(this.state.error) return (<Text>Error</Text>)
        else {
            var forum: ForumData = this.state.data;
            var cDate = new Date(forum.cdate)
            return (
                <ScrollView style={styles.container}>
                    <Text type="headline" >{forum.forum_name}</Text>
                    <Text type="body" >{forum.description}</Text>
                    <Text type="body" color="gray3">{cDate.getDate()+' '+month_names[cDate.getMonth()]+' '+cDate.getFullYear()}</Text>
                    <Image 
                        imagetype="banner"
                        resizeMode="cover"
                        src={forum.image}>
                    </Image>
                    <VerticalSpacer1></VerticalSpacer1>
                    <View style={styles.flexRow}>
                        <View style={[{flex: 1},styles.flexRow]}>
                            <Icon customStyle={styles.icon} name="report"></Icon>
                            <Text>{forum.likes}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Icon customStyle={styles.icon} name="share"></Icon>
                            <Icon customStyle={styles.icon} name="report"></Icon>
                        </View>
                    </View>
                    <VerticalSpacer2></VerticalSpacer2>
                    <View style={styles.borderBottom}></View>
                    <View style={styles.container}>
                        <Text type="headline" style={{
                            paddingBottom: 8,
                        }}>Komen Terbaru</Text>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        padding: k8, 
    },
    borderBottom:{
        marginTop: k8,
        marginBottom: k8,
        borderBottomWidth: 1,
        borderBottomColor: GRAY
    },
    row:{
        flex: 1,
        flexDirection: "row",
    },
    flexRow:{
        flexDirection: "row"
    },
    forumImage:{
        width: screenWidth,
    },
    icon:{
        height: 24,
        width: 24,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
})