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
  TouchableHighlight,
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

	constructor(props){
    super(props);
    this.state = {
      showCancel: false, // sets flag for rendering renderCancel()
      val1: 'A1-26',
      val2: 'A1-27',
      val3: 'A1-28',
      val4: 'A1-29',
       // changes value of TouchableHighlight->View->Text
    }
  }
  pod1Toggle(event) {
      this.setState({
          showCancel: !this.state.showCancel
      });
  }
  
  renderCancel() {
      if (this.state.showCancel) {
        return (
          <View>
              <Text style={styles.welcome}>{this.state.val1}</Text>
              <Text style={styles.welcome}>{this.state.val2}</Text>
          </View>
        );
      }
      else {
          return (
            <View></View>
          );
      }
  }

  render() {
      return (
        <View style={styles.container}>

          <TouchableHighlight onPress={this.pod1Toggle.bind(this)}>
            <View>
              <Text>
                Pod1
              </Text>
            </View>
          </TouchableHighlight>

          {this.renderCancel()}

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
  title: {
    fontWeight: 'bold',
  }
});

module.exports = Shipments;
