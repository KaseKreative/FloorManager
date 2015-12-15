/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
 StyleSheet,
 Text,
 Image,
 TouchableHighlight,
 View,
} = React;


class sectionTitle extends React.Component{
 
 render(){
   return (
     <View>
        <Text style={styles.sectionName}>{this.props.sectionID}</Text>
     </View>
   );
 }
};

var styles = StyleSheet.create({
sectionName: {
  flexDirection: 'row',
  fontSize: 15,
},


});
module.exports = sectionTitle;