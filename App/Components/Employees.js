'use strict';

var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Component
} = React;

class Shipments extends React.Component {
  render(){
		return (
      <View style={styles.container}>
			 <Text style={styles.headingOne}>EMPLOYEES OVERVIEW</Text>
			 <Text style={styles.headingTwo}></Text>
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
 },
 headingTwo: {
	 fontSize: 15,
   textAlign: 'left',
   margin: 10
 }
});

module.exports = Shipments;
