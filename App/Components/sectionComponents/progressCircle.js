/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
    Progress = require('react-native-progress'),
    Shipments = require('../Shipments');

var {
 StyleSheet,
 Text,
 Image,
 TouchableOpacity,
 View,
} = React;


class progressCircle extends React.Component{
  totalCapacity(){
    this.props.navigator.push({
      title: 'Section Capacity',
      component: Shipments,
    });
  }
 render(){
   return (
      <View style={styles.circles}>
      <TouchableOpacity onPress={()=> this.totalCapacity()}>
        <Progress.Circle
        size={100}
        showsText={true}
        style={styles.progress}
        progress={this.props.capacity}
        indeterminate={false} />
        <Text style={styles.progLable}>Used</Text>
        </TouchableOpacity>
      </View>
      
   );
 }
};

var styles = StyleSheet.create({

circles: {
  flexDirection: 'row',
},
progress: {
  margin: 10,
},
progLable: {
  position: 'absolute',
  backgroundColor: 'transparent',
  top: 170,
  left: 85,
  fontSize: 12
 },
});
module.exports = progressCircle;