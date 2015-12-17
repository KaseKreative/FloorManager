/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Radio,
} = React;

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class SectionOptions extends React.Component{

  constructor(){
    super();
    this.state = {};
  }

  render(){

    const options = [
      { label:'A1', value: '1000' },
      { label:'A2', value: '2000'},
      { label:'A3', value: '3000' },
    ];

    function setSelectedOption(option){
      this.setState({
        selectedCustomSegment: option,
      });
    }

    return (
      <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
        <Text style={{paddingBottom: 10, fontWeight:'bold'}}>Select a Section</Text>
        <SegmentedControls
          tint= {'#485951'}
          selectedTint= {'white'}
          backTint= {'#92ABA0'}

          options={ options }
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={ this.state.selectedCustomSegment }
          extractText={ (option) => option.label }
          testOptionEqual={ (a, b) => {
            if (!a || !b) {
              return false;
            }
            return a.label === b.label
          }}/>
        <Text style={{marginTop: 10}}>Available: {this.state.selectedCustomSegment&& this.state.selectedCustomSegment.value || '0'}lbs</Text>
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
module.exports = SectionOptions;