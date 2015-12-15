'use strict';

var React = require('react-native');
var Progress = require('react-native-progress');
var Button = require('react-native-button');
var CustomModal = require('./Modal');

var {
	Text,
	View,
	Image,
  	StyleSheet,
} = React;




class Sections extends React.Component{

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

			<CustomModal 
			triggerModalText={<Image style={styles.workerImage} source={require('../Utils/images/employee.png')} />} 
			modalBody={
				<View style={styles.modalBody}>
					<Text style={styles.modalHeadingText}>Currently Working In Section A1-27</Text>
					<Text style={styles.modalBodyText}>Worker Name</Text>
	        		<Text style={styles.modalBodyText}>Worker Occupation</Text>
	        		<Image style={styles.workerImage} source={require('../Utils/images/worker1-01.png')} />
	        	</View>
			} 
			closeModalText={"Close"} />

			</View>

    )
	}
};

var styles = StyleSheet.create({
sectionContainer: {
	width: 200,
	alignItems: 'center',
    justifyContent: 'center',
	borderWidth: 1, 
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
modalHeadingText: {
	color: '#fff',
	fontSize: 34,
	marginBottom: 10
},
modalBody: {
	alignItems: 'center',
	justifyContent: 'center',
},
modalBodyText: {
	color: '#fff',
	fontSize: 20,
	fontWeight: 'bold'
},
workerImage: {
	marginTop: 20,
}

});

module.exports = Sections;
