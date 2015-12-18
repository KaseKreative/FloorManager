/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
	SectionTitle = require('./sectionTitle'),
	SectionImage = require('./sectionImage'),
	ProgressCircle = require('./progressCircle'),
	CustomModal = require('../customModal');
var {
 StyleSheet,
 Text,
 Image,
 TouchableHighlight,
 View,
} = React;


class newSection extends React.Component{
 render(){  
   return (
     <View style={styles.container}>
     	<SectionTitle sectionID={this.props.sectionID}/>
     	<SectionImage sectionImage={this.props.sectionImage}/>
     	<ProgressCircle navigator={this.props.navigator} capacity={this.props.capacity}/>
     	<CustomModal sectionEmployees={this.props.sectionEmployees} sectionID={this.props.sectionID}/>
     </View>
   );
 }
};

var styles = StyleSheet.create({
 container: {
   	width: 200,
	  alignItems: 'center',
    justifyContent: 'center',
    padding:5,
    backgroundColor: '#FCFBFA',
	  borderWidth: 2, 
    borderColor: '#243A2D',
 },
 title: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10
 },
 progLable: {
  position: 'absolute',
  backgroundColor: 'transparent',
  top: 170,
  left: 85,
  fontSize: 12
 },


});
module.exports = newSection;