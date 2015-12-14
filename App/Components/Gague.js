'use strict';

var React = require('react-native');
var {
	Text,
	View,
	Image,
  	StyleSheet,
} = React;



var Progress = require('react-native-progress');
class Gague extends React.Component {

	render(){
		return (
      	
      		<View style={styles.sectionContainer}>
			<View>
				<Text style={styles.sectionName}>Section A1-27</Text>
				<Image style={styles.sectionImage} source={require('../Utils/images/secA1-27-01.png')} />
			</View>

			<View style={styles.circles}>
				<Text></Text>
				<Progress.Circle
				size={100}
				showsText={true}
				style={styles.progress}
				progress={ 0.4 }
				indeterminate={false} />
			</View>
			<Text style={styles.progLable}>Used</Text>
			</View>

    )
	}
};

var styles = StyleSheet.create({
sectionContainer: {
	width: 200,
	alignItems: 'center',
    justifyContent: 'center',
	borderWidth: 2, 
    borderColor: '#00ff00'
},
sectionName: {
	flexDirection: 'row',
	fontSize: 15,
},
sectionImage: {
	flexDirection: 'row',
},
 circles: {
    flexDirection: 'row',
  },
  progLable: {
	fontSize: 15
  },
  progress: {
    margin: 10,
  },
});

module.exports = Gague;
