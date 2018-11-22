import React, { Component } from "react";
import { 
     View,
     Text,
     StyleSheet
} from "react-native";

class CheckListScreen extends Component {
     render() {
          return (
               <View style={styles.container}>
                    <Text>CheckListScreen</Text>
               </View>
          );
     }
}
export default CheckListScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
     }
});