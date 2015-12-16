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
        <Section sectionID={this.props.sectionID} img={'../Utils/images/employee.png'} navigator={this.props.navigator} capacity={this.props.capacity} />
		  </View>
    	)
	}
};

var styles = StyleSheet.create({
sectionContainer: {
	width: 200,
	alignItems: 'center',
  marginTop:40,
  marginLeft: 45,

}

});

module.exports = Sections;
