'use strict';

var React = require('react-native');
// var Btn  = require('react-native-button');
var Modal   = require('react-native-modalbox');
var {
	Text,
	View,
	Image,
  	StyleSheet,
} = React;




 var Modal = React.createClass({
 	getInitialState: function() {
    return {
      isOpen: false,
      isDisabled: false
    };
  },

  openModal1: function(id) {
    this.refs.modal1.open();
  },
  toggleDisable: function() {
    this.setState({isDisabled: !this.state.isDisabled});
  },

	render(){
		return (
      	
      		<View style={styles.sectionContainer}>

			<Modal style={[styles.modal, styles.modal1]} ref={"modal1"} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
          	<Text style={styles.text}>Basic modal</Text>
        	</Modal>

			</View>

    )
	}
});

var styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  }

});

module.exports = Modal;
