'use strict';

var React = require('react-native');
var {
	ScrollView,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} = React;

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class Shipments extends React.Component {
	render() {
	  const options = [
	    "Pod1",
	    "Pod2"
	  ];

	  function setSelectedOption(selectedOption){
	    this.setState({
	      selectedOption
	    });
	  };

	  function renderOption(option, selected, onSelect, index){
	    const style = selected ? { fontWeight: 'bold'} : {}

	    return (
	      <TouchableWithoutFeedback onPress={onSelect} key={index}>
	        <Text style={style}>{option}</Text>
	      </TouchableWithoutFeedback>
	    );
	  }

	  function renderContainer(optionNodes){
	    return <View>{optionNodes}</View>;
	  }

	  return (
	    <View style={{margin: 20}}>
	      <RadioButtons
	        options={ options }
	        onSelection={ setSelectedOption.bind(this) }
					//this.state.selectedOption
	        selectedOption={"Pod1"}
	        renderOption={ renderOption }
	        renderContainer={ renderContainer }
	      />
	      <Text>Selected option: {"Pod1" || 'none'}</Text>
	    </View>);
	}
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Shipments;
