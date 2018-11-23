import React, { Component } from "react";
import { 
     View,
     Text,
     StyleSheet
} from "react-native";
import { connect } from 'react-redux';

class CheckListScreen extends Component {
     render() {
          this.props;
          debugger;
          return (
               <View style={styles.container}>
                    <Text>CheckListScreen</Text>
               </View>
          );
     }
}

function mapStateToProps( state ) {
     return {
          list: state.listReducer.list,
          pairings: state.listReducer.pairings,
     }
}

export default connect( mapStateToProps )(CheckListScreen);

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
     }
});