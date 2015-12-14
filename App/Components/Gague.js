'use strict';

var React = require('react-native');
var {
	Text,
	View,
	Image,
  	StyleSheet,
} = React;



var Progress = require('react-native-progress');
class Gague extends React.Component {

	render(){
		return (
      	<View style={styles.container}>
      	<View style={styles.sectionImage}>
      	<Image source={require('../Utils/images/secA1-27-01.png')} />
      	</View>

	      <View style={styles.circles}>
	      <Text style={styles.progLable}>Space Available</Text>
          <Progress.Circle
            size={100}
            showsText={true}
            style={styles.progress}
            progress={ 0.4 }
            indeterminate={false} />
          </View>
		</View>
    )
	}
};

var styles = StyleSheet.create({
sectionImage: {
	flexDirection: 'row',
    alignItems: 'center',
},
 circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progLable: {

  },
  progress: {
    margin: 10,
  },
});

module.exports = Gague;
