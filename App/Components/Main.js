'use strict';

var React = require('react-native'),
    employees = require('./employees'),
    capacity = require('./capacity'),
    shipments = require('./shipments');

var {
	Text,
	View,
  StyleSheet,
  TouchableHighlight
} = React;

class Main extends React.Component {
    employees(){
    this.props.navigator.push({
      title: 'Employees',
      component: employees,
      passProps: {employee: 'Kase'}
    });
  }
    capacity(){
    this.props.navigator.push({
      title: 'Capacity',
      component: capacity,
      passProps: {capacity: '100%'}
    });
  }
    shipments(){
    this.props.navigator.push({
      title: 'New Shipments',
      component: shipments,
      passProps: {shipments: 'TELEVISIOOOOOOON'}
    });
  }
	render(){
		return (
      <View style={styles.container}>
      <View style={styles.buttonPads}>
      <TouchableHighlight style={styles.button} onPress={() => this.employees()}>
        <Text style={styles.buttonText}>Employee</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => this.capacity()}>
        <Text style={styles.buttonText}>Capacity</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => this.shipments()}>
        <Text style={styles.buttonText}>Shipments</Text>
      </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.placeholder}>---- Sections of Warehouse ----</Text>
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
  title: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10
 },
 button: {
   height: 40,
   marginTop: 10,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ED7A3A',
 },
 buttonText: {
  color:'white'
 },
 buttonPads: {
  paddingRight: 50,
  paddingLeft: 50
 },
placeholder: {
  marginTop: 20,
  textAlign: 'center'
}
});

module.exports = Main;