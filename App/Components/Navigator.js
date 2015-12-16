/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
    FloorManager = require('./FloorManager');
var {
 StyleSheet,
 Text,
 Image,
 NavigatorIOS,
 TouchableHighlight,
 View,
} = React;


class Navigator extends React.Component{

 render(){
   return (
     <View style={styles.container}>
     <NavigatorIOS 
        style={styles.container} barTintColor={'#ED7A3A'}titleTextColor={'white'}tintColor={'white'} 
        initialRoute={{
          title: 'Warehouse Overview',
          component: FloorManager,
        }}/>

     </View>
   );
 }
};

var styles = StyleSheet.create({
 container: {
   flex: 1,
 }


});module.exports = Navigator;