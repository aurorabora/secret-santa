import React, { Component } from "react";
import { 
     View,
     Text,
     StyleSheet
} from "react-native";

class FinishScreen extends Component {
     render() {
          return (
               <View style={styles.container}>
                    <Text>FinishScreen</Text>
               </View>
          );
     }
}
export default FinishScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
     }
});