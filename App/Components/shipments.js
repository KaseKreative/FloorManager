'use strict';

var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  PropTypes,
} = React;

var PodOptions = require('./podOptionComponents/PodOptions');

class Shipments extends React.Component {
  render(){
    return (
       <View style={styles.container}>
       <Text style={styles.headingOne}>SHIPMENTS OVERVIEW</Text>
       <PodOptions/>
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

module.exports = Shipments;
