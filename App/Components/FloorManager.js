'use strict';

var React = require('react-native'),
	  Main  = require('./Main')

var {
	View,
	Text,
	NavigatorIOS,
  StyleSheet,
} = React;

class FloorManager extends React.Component {
	render() {
		return (
			<NavigatorIOS
			style={styles.container}
			initialRoute={{
			title: 'Main',
			component: Main
			}}/>
		);
	}
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = FloorManager;