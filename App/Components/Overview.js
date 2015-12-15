'use strict';

var React = require('react-native');
var {
	Text,
	View,
  	StyleSheet,
	PropTypes,
} = React;

var Circle = require('./Shapes/Circle');
var Progress = require('./Gauge');

class Overview extends React.Component {
	render(){
		return (
      	<View style={styles.container}>
			 <Text style={styles.headingOne}>WAREHOUSE OVERVIEW</Text>
	         <Progress 
                navigator={this.props.navigato}
           />
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
