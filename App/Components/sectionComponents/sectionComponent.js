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
     	<SectionImage />
     	<ProgressCircle />
      <Text style={styles.progLable}>used</Text>
     	<CustomModal  />
     </View>
   );
 }
};

var styles = StyleSheet.create({
 container: {
   	width: 200,
	  alignItems: 'center',
    justifyContent: 'center',
	  borderWidth: 1, 
    borderColor: '#00ff00'
 },
 button: {
   height: 40,
   alignItems: 'center',
   backgroundColor: '#4BABFF',
   justifyContent: 'center',
   borderWidth: 2,
   marginTop: 10,
   borderColor: 'rgba(160,160,230,.6)'
 },
 buttonPads: {
  paddingRight: 50,
  paddingLeft: 50
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