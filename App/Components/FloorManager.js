'use strict';

var React 		= require('react-native'),
	  Main  		= require('./Main'),
		Overview 	= require('./Overview'),
		Employees	= require('./Employees'),
		Shipments = require('./Shipments')

var {
	View,
	Text,
	// NavigatorIOS,
  StyleSheet,
	TabBarIOS,
  Component
} = React;

class FloorManager extends Component {

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
	          icon={require('../Utils/images/overview.png')}
	          selected={this.state.selectedTab === 'Overview'}
	          onPress={() => {
	              this.setState({
	                  selectedTab: 'Overview',
	              });
	          }
	        }>
	        <Overview/>
	        </TabBarIOS.Item>
	        <TabBarIOS.Item
	          systemIcon='bookmarks'
	          selected={this.state.selectedTab === 'Employees'}
	          onPress={() => {
	                this.setState({
	                    selectedTab: 'Employees',
	                });
	          }}>
	        <Employees/>
	        </TabBarIOS.Item>
	        <TabBarIOS.Item
	          systemIcon='recents'
	          selected={this.state.selectedTab === 'Shipments'}
	          // icon={{uri:'most-viewed'}}
	          onPress={() => {
	                this.setState({
	                    selectedTab: 'Shipments',
	                });
	          }}>
	        <Shipments/>
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
