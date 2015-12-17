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
	constructor(props){
		super(props);
	}

 render(){
 	var link = this.props.sectionImage;
   return (
     <View>       
        <Image style={styles.sectionImage} source={{uri: 'http://localhost:8081/App/Utils/images/'+link}} />
     </View>
   );
 }
};

var styles = StyleSheet.create({
sectionImage: {
	marginTop: 5,
	width: 100,
	height: 62
  // flexDirection: 'row',
}


});
module.exports = sectionName;