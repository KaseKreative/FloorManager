'use strict';

var React = require('react-native'),
    Button = require('react-native-button'),
    Section = require('./sectionComponents/sectionComponent');



var {
	Text,
	View,
	Image,
    StyleSheet,
} = React;



var URI = "../Utils/images/employee.png";
class Sections extends React.Component {
  
	render(){	

 		return (
			<View style={styles.sectionContainer}>

			<Image source={{uri: URI}}/>
			<Section sectionID={'A1-27'} imageURI={URI} />

			</View>

    	)
	}
};

var styles = StyleSheet.create({
sectionContainer: {
	width: 200,
	alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 45
}

});

module.exports = Sections;
