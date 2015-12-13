'use strict';

var React = require('react-native');

var {
	Text,
	View,
  StyleSheet,
  TouchableHighlight
} = React;

class Shipments extends React.Component {
	render(){
		return (
      <View style={styles.container}>
			 <Text style={styles.headingOne}>SECTION A1-26</Text>
			 <Text style={styles.headingTwo}>Select a pod to move.</Text>
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
