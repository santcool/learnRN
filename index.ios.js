/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';

class HelloWorld extends Component {

  	constructor(props) {
  	  super(props);
  	
  	  this.state = {showText:true,count:0,text:''};
  	  // setInterval(()=>{
  	  // 	this.setState({showText:!this.state.showText,count:++this.state.count}),1
  	  // });
  	}

  render() {
  	let display = this.state.showText?'我家有只小毛驴哈哈哈'+this.state.count:'';
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>{this.props.name}</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TextInput style = {styles.input} placeholder = '请在此输入文字' onChangeText = {(text)=>this.setState({text})}/>
        <Text style={styles.hello}>{this.state.text}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#F5FCFF',
  },
  input:{
  	width:200,
  	height:44,
  	backgroundColor:'purple',
  },
  welcome: {
  	flex:1,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'green',
    margin: 10,
  },
  instructions: {
  	flex:2,
  	backgroundColor:'red',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
	hello:{
	flex:3,
	backgroundColor:'yellow',
	justifyContent:'center',
	backgroundColor:'#ccc',

	}
});

class PropsLearn extends Component{
	render(){
		return(
			<HelloWorld name = '游谱青年，本该旅行！' style = {styles.hello}></HelloWorld>
			);
	}

}


AppRegistry.registerComponent('HelloWorld', () => PropsLearn);
