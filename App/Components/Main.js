'use strict';

//Instead of Employees, we are going to have Overview.
//And I will change lowercase->Uppercase.
var React       = require('react-native'),
    //employees   = require('./employees'),
    Overview    = require('./Overview'),
    //capacity    = require('./capacity'),
    Capacity    = require('./Capacity'),
    //shipments   = require('./shipments'),
    Shipments   = require('./Shipments'),
    Sections    = require('./sections');

var {
	Text,
	View,
  StyleSheet,
  TouchableHighlight
} = React;

class Main extends React.Component {
    Overview(){
    this.props.navigator.push({
      title: 'Overview',
      component: Overview,
      passProps: {employee: 'Kase'}
    });
  }
    Capacity(){
    this.props.navigator.push({
      title: 'Capacity',
      component: Capacity,
      passProps: {Capacity: '100%'}
    });
  }
    Shipments(){
    this.props.navigator.push({
      title: 'New Shipments',
      component: Shipments,
      passProps: {Shipments: 'TELEVISIOOOOOOON'}
    });
  }
	render(){
		return (
      <View style={styles.container}>
      <View style={styles.buttonPads}>
      <TouchableHighlight style={styles.button} onPress={() => this.Overview()}>
        <Text style={styles.buttonText}>Overview</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => this.Capacity()}>
        <Text style={styles.buttonText}>Capacity</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => this.Shipments()}>
        <Text style={styles.buttonText}>Shipments</Text>
      </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.placeholder}>---- Sections of Warehouse ----</Text>
        <Sections />
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
   left: 5,
   width: 200,
   justifyContent: 'center',
   backgroundColor: '#ED7A3A',
 },
 buttonText: {
  color:'white',
  textAlign: 'center',
 },
 buttonPads: {
  // paddingRight: 150,
  // paddingLeft: 150
 },
placeholder: {
  marginTop: 20,
  textAlign: 'center'
}
});

module.exports = Main;