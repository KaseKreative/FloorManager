'use strict';

var React = require('react-native');
var {
	Text,
	View,
  	StyleSheet,
	PropTypes,
} = React;

var Circle = require('./Shapes/Circle');
var Section = require('./Sections');


class Overview extends React.Component {
	render(){
		return (
       <View style={styles.container}>
			 <Text style={styles.headingOne}>WAREHOUSE OVERVIEW</Text>
	     <Section/ >
		</View>
    )
	}
};

var styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 60,
 },
  headingOne: {
   fontSize: 25,
   textAlign: 'left',
   margin: 10
 }
});

module.exports = Overview;
