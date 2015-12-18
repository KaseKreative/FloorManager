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
  textAlign: 'center',
  color: '#DFE3E8',
  fontSize: 15,
  padding: 10,
  width: 197,
  marginTop: -5,
  backgroundColor: '#6B6864',

},


});
module.exports = sectionTitle;