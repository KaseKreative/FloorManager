/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var CustomModal = require('./Modal');
var {
 StyleSheet,
 Text,
 Image,
 View,
} = React;


class Modal extends React.Component{
 render(){
   return (
     <View style={styles.container}>
		<CustomModal 
			triggerModalText={<Image style={styles.workerImage} source={require('../Utils/images/employee.png')} />}
			modalBody={
				<View style={styles.modalBody}>
					<Text style={styles.modalHeadingText}>{this.props.imageURI}</Text>
					<Text style={styles.modalHeadingText}>Currently Working In Section A1-27</Text>
					<Text style={styles.modalBodyText}>Worker Name</Text>
	        		<Text style={styles.modalBodyText}>Worker Occupation</Text>
	        		<Image style={styles.workerImage} source={require('../Utils/images/worker1-01.png')} />
	        	</View>
			} 
	closeModalText={"Close"} />

     </View>
   );
 }
};

var styles = StyleSheet.create({
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
	width:400,
	height: 400
},


});

module.exports = Modal;

