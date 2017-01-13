import React,{Component,PropTypes} from 'react';
import {View,Text,Navigator,TouchableHighlight,Image} from 'react-native';

export default class MyScene extends Component{
	static get defaultProps(){
		return {
			title:'MyScene'
		};
	}
	_ggg(){
		alert("长按");
	}
	render(){
		return(
			<View>
				<Text>Current Scene:{this.props.title}</Text>
				<TouchableHighlight onPress={this.props.onForward}>
					<Text>Tap me to load the next scene</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.onBack} onLongPress={this._ggg}>
					<Image style={{width:100,height:100}}  source={require('./static/tes.jpg')}/>
				</TouchableHighlight>
			</View>
		)
	}
}
MyScene.propTypes={
	title:PropTypes.string.isRequired,
	onForward:PropTypes.func.isRequired,
	onBack:PropTypes.func.isRequired,	
};
