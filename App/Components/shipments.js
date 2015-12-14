'use strict';

var React = require('react-native');
var {
	ScrollView,
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Component,
  TouchableWithoutFeedback,
	Radio,
} = React;

var Radio = require('../../node_modules/react-native-radio-button-classic');
var Option = Radio.Option;

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { title, description } = this.props;

    return (
      <View style={{ paddingTop: 7, paddingLeft: 10 }}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.description}>{ description }</Text>
      </View>
    );
  }
}

class Shipments extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
      optionSelected: 1
    }
  }

  onSelect(index) {
    this.setState({
      optionSelected: index + 1
    });
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
				<Radio onSelect={this.onSelect.bind(this)} defaultSelect={this.state.optionSelected - 1}>
          <Option color="gray" selectedColor="#008BEF">
            <Item title="Pod 1" description="Quantity : , Total Weight: "/>
          </Option>
          <Option color="gray" selectedColor="#008BEF">
            <Item title="Pod 2" description="Quantity : , Total Weight: "/>
          </Option>
          <Option color="gray" selectedColor="#008BEF">
            <Item title="Pod 3" description="Quantity : , Total Weight: "/>
          </Option>
        </Radio>
        <View style={{ paddingTop: 40 }}>
          <Text>You have selected Pod {this.state.optionSelected}</Text>
        </View>
      </View>
    );
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
