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
			 <Text style={styles.title}>{this.props.shipments}</Text>
		  </View>

    )
	}
};


var styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 60,

 },
  title: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10
 },
});

module.exports = Shipments;
