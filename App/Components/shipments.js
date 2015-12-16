'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Component,
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
      buttonValue:'Move pod',
      optionSelected:1,
      sectionSelected:1,
      showCancel: false, // sets flag for rendering renderCancel()
      val1: 'A1-26',
      val2: 'A1-27',
      val3: 'A1-28',
      val4: 'A1-29',
    }
  }

  onSelect(index) {
    this.setState({
      optionSelected: index + 1,
    })
  }

  onSelectSection(index){
    this.setState({
      sectionSelected: index + 1,
    })
  }

  makeBtn(event) {
      this.setState({
          showCancel: !this.state.showCancel
      });
  }

  render() {
      return (
        <View style={styles.container}>

          

          

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

          <Radio onSelect={this.onSelectSection.bind(this)} defaultSelect={this.state.sectionSelected - 1}>
            <Option color="gray" selectedColor="#008BEF">
              <Item title={this.state.val1} description=""/>
            </Option>
            <Option color="gray" selectedColor="#008BEF">
              <Item title={this.state.val2} description=""/>
            </Option>
            <Option color="gray" selectedColor="#008BEF">
              <Item title={this.state.val3} description=""/>
            </Option>
          </Radio>

          <View style={{ paddingTop: 40 }}>
            <Text>You have selected Pod {this.state.optionSelected}</Text>
            <Text>Section: {this.state.sectionSelected}</Text>
          </View>

          <TouchableHighlight 
          onPress={this.makeBtn.bind(this)}>
            <View>
              <Text>
                Move the pod
              </Text>
            </View>
          </TouchableHighlight>

          {this.renderCancel()}

        </View>
      );
  }
renderCancel() {
      if (this.state.showCancel) {
        return (
          
          <View>
          <TouchableHighlight
            style={styles.button}
            >
                <View>
                    <Text style={styles.welcome}>{this.state.buttonValue}</Text>
                </View>
          </TouchableHighlight>
          </View>


        );
      }
      else {
          return (
            <View></View>
          );
      }
  }

};


var styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignSelf: 'stretch',
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
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = Shipments;
