/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Progress = require('react-native-progress');

var {
 StyleSheet,
 Text,
 Image,
 TouchableHighlight,
 View,
} = React;


class progressCircle extends React.Component{

 render(){
   return (
      <View style={styles.circles}>
        <Progress.Circle
        size={100}
        showsText={true}
        style={styles.progress}
        progress={this.props.capacity}
        indeterminate={false} />
        <Text style={styles.progLable}>Used</Text>
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
  fontSize: 15
},


});
module.exports = progressCircle;