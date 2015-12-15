'use strict';

var React = require('react-native');
var Progress = require('react-native-progress');
var Button = require('react-native-button');
var Modal   = require('react-native-modalbox');

var {
	Text,
	View,
	Image,
  	StyleSheet,
} = React;




var Gauge = React.createClass({
	getInitialState: function() {
    return {
      isOpen: false,
      isDisabled: false
    };
  },

  openWorkers: function(id) {
    this.setState({isOpen: true});
  },
  closeWorkers: function(id) {
    this.setState({isOpen: false});
  },
  toggleDisable: function() {
    this.setState({isDisabled: !this.state.isDisabled});
  },
	render(){
		var closeModal = <Button onPress={this.closeWorkers} style={[styles.btn, styles.btnModal]}>X</Button>;
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



 			<Button onPress={this.openWorkers} style={styles.btn}>
 			<Image style={styles.sectionImage} onPress={this.openWorkers} source={require('../Utils/images/employee.png')} />
 			</Button>			 
        	<Modal 
	        	isOpen={this.state.isOpen} 
	        	onClosed={this.closeWorkers} 
	        	style={[styles.modal, styles.modalInner]} 
	        	position={"center"} 
	        	backdropContent={closeModal}>

	        	<View style={styles.modalHeading}>
	        	     <Text style={styles.modalHeadingText}>Currently Working In Section A1-27</Text>
	        	</View>
	        	
	        	<View style={styles.modalBody}>
	        		<Text style={styles.modalBodyText}>Worker Name</Text>
	        		<Text style={styles.modalBodyText}>Worker Occupation</Text>
	        		<Image style={styles.workerImage} source={require('../Utils/images/worker1-01.png')} />
	        	</View>

        	</Modal>
			</View>

    )
	}
});

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
modal: {
	height: 300,
},
	modalInner: {
	height: 600,
	backgroundColor: 'red',
},
btn: {
	margin: 10,
	backgroundColor: "#3B5998",
	color: "white",
	padding: 10
},
btnModal: {
	position: "absolute",
	top: 0,
	right: 0,
	width: 50,
	height: 50,
	backgroundColor: "transparent"
},
modalHeading: {
	alignItems: 'center',
	marginTop: 10
},
modalHeadingText: {
	color: 'black',
	fontSize: 34
},
modalBody: {
	marginTop: 100,
	alignItems: 'center',
	justifyContent: 'center',
},
modalBodyText: {
	fontSize: 20,
	fontWeight: 'bold'
},
workerImage: {
	marginTop: 20,
}

});

module.exports = Gauge;
