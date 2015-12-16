'use strict';

var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  PropTypes,
} = React;

var Section = require('./Sections');

class Overview extends React.Component {
	render(){
		return (
       <View style={styles.container}>
			 <Text style={styles.headingOne}>WAREHOUSE OVERVIEW</Text>
       <View style={styles.section}>
	     <Section 
          navigator={this.props.navigator} />

       <Section 
          navigator={this.props.navigator} />
      <Section 
          navigator={this.props.navigator} />
      <Section 
          navigator={this.props.navigator} />
       </View>
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
 section: {
  flex: 1,
  flexDirection: 'row',
 }
});

module.exports = Overview;
