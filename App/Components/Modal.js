
'use strict';
const React = require('react-native');

//React Components
var{
	View,
	Text,
	StyleSheet,
	Modal,
  TouchableHighlight
} = React;

//modal component
class CustomModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      transparent: false,
      triggerModalText: props.triggerModalText
    };
  }
  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	render(){
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? '#110D0C':'rgba(17, 13, 12, .95)',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
		return(
      <View>

			<Modal
          animated={true}
          transparent={true}
          visible={this.state.modalVisible}>
           <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>

              <View>{this.props.modalBody}</View>

              <TouchableHighlight 
                style={styles.button}
                underlayColor={'#696969'}
                onPress={this._setModalVisible.bind(this, false)}>
                <Text style={styles.buttonText}>{this.props.closeModalText}</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <View>
        <TouchableHighlight onPress={this._setModalVisible.bind(this, true)}>
            <Text>{this.props.triggerModalText}</Text>
          </TouchableHighlight>
        </View>
      </View>
		);
	}
};
//styles for modal
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  button:{
    marginTop: 10,
    padding:10,
    height:40,
    backgroundColor: 'red'
  },
  buttonText:{
    fontSize:19,
    textAlign:'center'
  }
});
module.exports = CustomModal;