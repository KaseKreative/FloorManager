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


class sectionName extends React.Component{

 render(){
   return (
     <View>
        <Image style={styles.sectionImage} source={require('../../Utils/images/secA1-27-01.png')} />
     </View>
   );
 }
};

var styles = StyleSheet.create({
sectionImage: {
  flexDirection: 'row',
},


});module.exports = sectionName;