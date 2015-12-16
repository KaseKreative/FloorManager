'use strict';

var React 		= require('react-native'),
	Overview 	= require('./Overview'),
	Employees	= require('./Employees'),
	Shipments	= require('./Shipments')

var {
	View,
	Text,
	StyleSheet,
	Navigator,
	TabBarIOS,
  	Component
} = React;

class FloorManager extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Overview'
    };
  }
	render() {
	    return (
	      <TabBarIOS selectedTab={this.state.selectedTab}>
	        <TabBarIOS.Item
						title="Overview"
	          icon={require('../Utils/images/overview.png')}
	          selected={this.state.selectedTab === 'Overview'}
	          onPress={() => {
	              this.setState({
	                  selectedTab: 'Overview',
	              });
	          }
	        }>
	        <Overview navigator = {this.props.navigator}/>
	        </TabBarIOS.Item>
	        <TabBarIOS.Item
						title="Employees"
	          icon={require('../Utils/images/employee.png')}
	          selected={this.state.selectedTab === 'Employees'}
	          onPress={() => {
	                this.setState({
	                    selectedTab: 'Employees',
	                });
	          }}>
	        <Employees navigator = {this.props.navigator} />
	        </TabBarIOS.Item>
	        <TabBarIOS.Item
						title="Shipments"
	          icon={require('../Utils/images/shipment.png')}
	          selected={this.state.selectedTab === 'Shipments'}
	          onPress={() => {
	                this.setState({
	                    selectedTab: 'Shipments',
	                });
	          }}>
	        <Shipments navigator = {this.props.navigator} />
	        </TabBarIOS.Item>
	      </TabBarIOS>
	    );
	  }

};


var styles = StyleSheet.create({
  container: {
    flex: 1,
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
module.exports = FloorManager;
