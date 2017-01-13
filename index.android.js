import React, { Component } from 'react';
import { AppRegistry,View, Image,Text } from 'react-native';


class Playground extends Component{
	constructor(props){
		super(props);
		this.state={
			bounceValue:new Animated.Value(0)
		};
	}
	render(){
		return(
			<Animated.Image
				source={{require('./static/XMKOH81.jpg')}}
				style={{
					flex:1,transform:[{scale:this.state.bounceValue}]
				}}
		);
	}
	componentDidMount(){
		this.state.bounceValue.setValue(1.5);
		Animated.spring(
			this.state.bounceValue,
			{
				toValue:0.8,
				friction:1
			}
		).start();
	}
}
export default class AwesomeProject extends Component {
  render() {
  	return(
				<Playground/>
  	)
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);