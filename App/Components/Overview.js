'use strict';

var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  PropTypes,
} = React;

var Section = require('./Sections');

var section1Data = {name:['Leyo Summ'], occupation:['Packer'], image:['employee-01.png']};
var section2Data = {name:['Kase Tebo'], occupation:['Maintainance'], image:['employee-02.png']};
var section3Data = {name:['Hilson Francis'], occupation:['Forklift Operator'], image:['employee-03.png']};
var section4Data = {name:['Jimin Hong'], occupation:['Cleaner'], image:['employee-04.png']};

class Overview extends React.Component {
	render(){
		return (
       <View style={styles.container}>
			 <Text style={styles.headingOne}>WAREHOUSE OVERVIEW</Text>
       <View style={styles.section}>
	     <Section 
          navigator={this.props.navigator}
          sectionImage={'secA1-27-01.png'}
          sectionID={'A1-28'}
          capacity={.42} 
          sectionEmployees={section1Data}/>

       <Section 
          navigator={this.props.navigator}
          sectionImage={'secA1-28.png'}
          sectionID={'A1-29'}
          capacity={.5} 
          sectionEmployees={section2Data}/>
      <Section 
          navigator={this.props.navigator}
          sectionImage={'secA1-29.png'}
          sectionID={'A1-30'}
          capacity={.68} 
          sectionEmployees={section3Data}/>
      <Section 
          navigator={this.props.navigator} 
          sectionImage={'secA1-30.png'}
          sectionID={'A1-31'}
          capacity={.22}
          sectionEmployees={section4Data}/>
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
