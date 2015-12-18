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
	constructor(props){
	super(props);
	}
 render(){
 	console.log(this.props.sectionEmployees);
   var link = this.props.sectionEmployees.image;
   return (
     <View style={styles.container}>
		<CustomModal 
			triggerModalText={<Image style={styles.workerImage} source={require('image!employee')} />}
			modalBody={
				<View style={styles.modalBody}>
					<Text style={styles.modalHeadingText}>Currently Working in Section {this.props.sectionID}</Text>
					<Text style={styles.modalBodyText}>Name: {this.props.sectionEmployees.name}</Text>
	        		<Text style={styles.modalBodyText}>Task: {this.props.sectionEmployees.occupation}</Text>
	        		<Image style={styles.workerImage} source={{uri: 'http://localhost:8081/App/Utils/images/'+link}} />
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

