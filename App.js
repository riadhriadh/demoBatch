import React, { Component } from 'react';
import { View, Text,TouchableHighlight } from 'react-native';
import { Batch,BatchPush,BatchUser,BatchMessaging } from '@bam.tech/react-native-batch';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){

  
   
  }
  runNotif(){
    Batch.start()
    BatchUser.editor()
    .setIdentifier("userID")
    .save();


    
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={()=>{
 this.runNotif()
        }}>
        <Text> App </Text>
        </TouchableHighlight>
       
      </View>
    );
  }
}
