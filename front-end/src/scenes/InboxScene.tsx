import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { navigationOption } from '../component/NavBar';
import InboxCard from '../component/InboxCard';
import InboxSaga from '../sagas/inboxSaga';
import { Inbox } from '../model/inbox';
import { headerBarColor } from '../constants/color';
import Text from '../core-ui/Text';

type Props = {};
type State = {
  error: Boolean,
  data: Inbox[],
  isLoading: Boolean
};

export default class InboxScene extends Component<Props, State> {
  static navigationOptions = navigationOption('Inbox');
  inboxSaga: InboxSaga = new InboxSaga

  componentWillMount=async ()=>{    
    this.setState({
      isLoading: true,
      error: false,
      data: []
    })
    var res: any = await this.inboxSaga.doGetInbox();
    
    this.setState({
      isLoading: false,
      error: res.error,
      data: res.data
    })
  }
  
  render() {
    if(this.state.isLoading){
      return (<ActivityIndicator style={{
        alignSelf: "stretch"
      }}
      size="large" color={headerBarColor} ></ActivityIndicator>)

    }else{
      if(!this.state.error){
      return(
        <ScrollView>
          {this.state.data.map(
            (f)=>{
              return (
                <InboxCard
                key={f.id}
                dateInbox={f.inbox_date}
                titleInbox={f.message}
              ></InboxCard>
              )
            }
          )}
      </ScrollView>
      )
    }else{
      return (
        <Text color="red">There has been an error loading your inbox</Text>
      )
    }


  }
}
}