'use strict';

var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Component
} = React;

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;



class Employees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      job: ''
    };
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  _job(task) {
    this.setState({
      ...this.state,
      job: task
    });
  }
  render(){
		return (
      <View style={styles.container}>
        <Text style={styles.headingOne}>EMPLOYEES OVERVIEW</Text>
          <View style={styles.card}>
            <Text style={styles.headingOne}>Handy Manny</Text>
            <Text style={styles.headingTwo}>Current Job: {this.state.job}</Text>

            <View style={styles.drop}>
                <Select
                  width={250}
                  ref="SELECT1"
                  optionListRef={this._getOptionList.bind(this)}
                  defaultValue="Assign a new Job"
                  onSelect={this._job.bind(this)}>
                  <Option>Picker</Option>
                  <Option>Shipper</Option>
                  <Option>Packer</Option>
                  <Option>Quality Assurance</Option>
                </Select>



                <OptionList ref="OPTIONLIST"/>
            </View>
          </View>
		  </View>

    )
	}
};




var styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 60,
 },
  headingOne: {
   fontSize: 25,
   textAlign: 'left',
   margin: 10
 },
  headingTwo: {
	 fontSize: 15,
   textAlign: 'left',
   margin: 10
 }, 
  card: {
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, 
    borderColor: '#D1D1D1',
    backgroundColor: '#D1D1D1',
  }, 
  drop: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  }
});

module.exports = Employees;
