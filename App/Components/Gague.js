'use strict';

var React = require('react-native');
var {
	Text,
	View,
  	StyleSheet,
} = React;



var Progress = require('react-native-progress');
class Gague extends React.Component {

	render(){
		return (
      	<View style={styles.container}>

	      <View style={styles.circles}>
          <Progress.Circle
           showsText={true}
            style={styles.progress}
            progress={0.5}
            indeterminate={true} />

          <Progress.Pie
            style={styles.progress}
            progress={0.4}
            indeterminate={true} />

          <Progress.Circle
            style={styles.progress}
            progress={0.4}
            indeterminate={false}
            direction="counter-clockwise" />
        
          <Progress.CircleSnail
           style={styles.progress}
           color={[
              '#F44336',
              '#2196F3',
              '#009688',
           	]} />
          </View>

		</View>
    )
	}
};

var styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 60,
 },
 circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});

module.exports = Gague;
