import React, { Component } from 'react';
import { NavigationScreenProps, ScrollView, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { headerBarColor, WHITE } from '../constants/color';
import { navigationOption } from '../component/NavBar';
import Text from "../core-ui/Text";
import { ForumSaga } from '../sagas/forumsSaga';
import { ForumData } from '../model/forum';
import ForumTitleCard from '../component/ForumTitleCard';
import { ActivityIndicator, StyleSheet} from 'react-native';

type Props = NavigationScreenProps

const style = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center'
      },
})

class ForumUmum extends Component {
    props!: Props;
    forumSaga: ForumSaga = new ForumSaga();
    
    state={
        error: null,
        data: [],
    }

    async componentDidMount(){
        this.setState(await this.forumSaga.doGetUmum())
    } 

    render(){
        if(this.state.error == null) return <ActivityIndicator style={style.loading} size="large" color={headerBarColor} />
        else if(this.state.error == true) return <Text>Error fetching the data...</Text>
        else return (
            <ScrollView>
                {this.state.data.map((f: ForumData)=>{
                    return (
                        <ForumTitleCard key={f.id.toString()} data={f}></ForumTitleCard>
                    );
                })}
            </ScrollView>
        )
    }
}

class ForumJual extends Component{
    props!: Props;
    forumSaga: ForumSaga = new ForumSaga();
    
    state={
        error: false,
        data: [],
    }

    async componentDidMount(){
        this.setState(await this.forumSaga.doGetJual())
    } 

    render(){
        if(this.state.error == null) return <ActivityIndicator style={style.loading} size="large" color={headerBarColor} />
        else if(this.state.error == true) return <Text>Error fetching the data...</Text>
        else return (
            <ScrollView>
                {this.state.data.map((f: ForumData)=>{
                    return (
                        <ForumTitleCard key={f.id.toString()} data={f}></ForumTitleCard>
                    );
                })}
            </ScrollView>
        )
    }
}

class ForumBeli extends Component{
    props!: Props;
    forumSaga: ForumSaga = new ForumSaga();
    
    state={
        error: false,
        data: [],
    }

    async componentDidMount(){
        this.setState(await this.forumSaga.doGetBeli())
    } 

    render(){
        if(this.state.error == null) return <ActivityIndicator style={style.loading} size="large" color={headerBarColor} />
        else if(this.state.error == true) return <Text>Error fetching the data...</Text>
        else return (
            <ScrollView>
                {this.state.data.map((f: ForumData)=>{
                    return (
                        <ForumTitleCard key={f.id.toString()} data={f}></ForumTitleCard>
                    );
                })}
            </ScrollView>
        )
    }
}

const forums = createMaterialTopTabNavigator({
    Umum: ForumUmum,
    Jual: ForumJual,
    Beli: ForumBeli,
},{
  tabBarOptions:{
    style:{
      backgroundColor: headerBarColor,
    },
    indicatorStyle:{
      backgroundColor: WHITE
    }
  },
  navigationOptions: navigationOption('Forums')

})

export default createAppContainer(forums);