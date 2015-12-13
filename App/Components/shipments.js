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

// var Radio = require('react-native-radio-button-classic');
// var Option = Radio.Option;

// import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class Shipments extends React.Component {
	render(){
		return (
      <View style={styles.container}>
			 <Text style={styles.headingOne}>Shipments</Text>
			 <Text style={styles.headingTwo}>Overview of section A1-26</Text>
		  </View>
    )
	}
	// constructor(props) {
  //   super(props);
	//
  //   this.state = {
  //     optionSelected: 1
  //   }
  // }
	//
  // onSelect(index) {
  //   this.setState({
  //     optionSelected: index + 1
  //   });
  // }
	//
  // render() {
  //   return (
  //     <View style={{ flex: 1, paddingTop: 20 }}>
  //       <Radio onSelect={this.onSelect.bind(this)} defaultSelect={this.state.optionSelected - 1}>
  //         <Option color="gray" selectedColor="#008BEF">
  //           <Item title="First Options" description="This is your First Option"/>
  //         </Option>
  //         <Option color="gray" selectedColor="#008BEF">
  //           <Item title="Second Options" description="This is your Second Option"/>
  //         </Option>
  //         <Option color="gray" selectedColor="#008BEF">
  //           <Item title="Third Options" description="This is your Third Option"/>
  //         </Option>
  //       </Radio>
	//
  //       <View style={{ paddingTop: 40 }}>
  //         <Text>You have selected option {this.state.optionSelected}</Text>
  //       </View>
  //     </View>
  //   );
  // }
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
