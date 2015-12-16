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
        <Section sectionID={'A1-37'} img={'../Utils/images/employee.png'} navigator={this.props.navigator} capacity={0.5} />
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
