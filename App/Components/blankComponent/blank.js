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


class _____ extends React.Component{
  FUNCTION-NAME(){
    this.props.navigator.push({
      title: '-----',
      component: COMPONENT VARIABLE,
      passProps: {myElement: 'Kase'}
    });
  }

 render(){
   return (
     <View style={styles.container}>


     </View>
   );
 }
};

var styles = StyleSheet.create({
 container: {
   flex: 1,
   marginTop: 60,
   backgroundColor: '#ED7A3A'
 },
 button: {
   height: 40,
   alignItems: 'center',
   backgroundColor: '#4BABFF',
   justifyContent: 'center',
   borderWidth: 2,
   marginTop: 10,
   borderColor: 'rgba(160,160,230,.6)'
 },
 buttonPads: {
  paddingRight: 50,
  paddingLeft: 50
 },
 title: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10
 },


});module.exports = Root;