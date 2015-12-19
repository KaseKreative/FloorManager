'use strict';

var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  PropTypes,
} = React;

var Section = require('./Sections');

var sectionData = {secA128:{sectionID:'A1-28', 
                            sectionImage:'secA1-27-01.png', 
                            sectionCapacity:.2, 
                            employees:{ name:['Leyo Summ'], 
                                          occupation:['Packer'], 
                                          image:['employee-01.png']
                                        }
                  },
                   secA129:{sectionID:'A1-29', 
                            sectionImage:'secA1-28.png', 
                            sectionCapacity:.5, 
                            employees:{ name:['Kase Tebo'], 
                                         occupation:['Maintainance'], 
                                         image:['employee-02.png']
                                       }
                   },
                   secA130:{sectionID:'A1-30', 
                            sectionImage:'secA1-29.png', 
                            sectionCapacity:.68, 
                            employees:{ name:['Hilson Francis'], 
                                        occupation:['Forklift Operator'], 
                                        image:['employee-03.png']
                                      }
                   },
                   secA131:{sectionID:'A1-31', 
                            sectionImage:'secA1-30.png', 
                            sectionCapacity:.22, 
                            employees:{name:['Jimin Hong'], 
                                       occupation:['Cleaner'], 
                                       image:['employee-04.png']
                                     }
                            }
                  };

class Overview extends React.Component {
	render(){
		return (
       <View style={styles.container}>
			 <Text style={styles.headingOne}>WAREHOUSE OVERVIEW</Text>
       <View style={styles.section}>
	     <Section 
          navigator={this.props.navigator}
          sectionImage={sectionData.secA128.sectionImage}
          sectionID={sectionData.secA128.sectionID}
          capacity={sectionData.secA128.sectionCapacity} 
          sectionEmployees={sectionData.secA128.employees}/>

       <Section 
          navigator={this.props.navigator}
          sectionImage={sectionData.secA129.sectionImage}
          sectionID={sectionData.secA129.sectionID}
          capacity={sectionData.secA129.sectionCapacity} 
          sectionEmployees={sectionData.secA129.employees}/>
      <Section 
          navigator={this.props.navigator}
          sectionImage={sectionData.secA130.sectionImage}
          sectionID={sectionData.secA130.sectionID}
          capacity={sectionData.secA130.sectionCapacity} 
          sectionEmployees={sectionData.secA130.employees}/>
      <Section 
          navigator={this.props.navigator} 
          sectionImage={sectionData.secA131.sectionImage}
          sectionID={sectionData.secA131.sectionID}
          capacity={sectionData.secA131.sectionCapacity}
          sectionEmployees={sectionData.secA131.employees}/>
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
  headingOne: {
   fontSize: 25,
   textAlign: 'left',
   margin: 10
 },
 section: {
  flex: 1,
  flexDirection: 'row',
 }
});

module.exports = Overview;
