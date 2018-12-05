import React, { Component } from "react";
import { 
     View,
     Text,
	StyleSheet,
	TouchableOpacity
} from "react-native";

class FinishScreen extends Component {
     static navigationOptions = {
          header: null,
	}
	
	navigateBack = () => {
		this.props.navigation.navigate("SplashScreen");
	}
	
     render() {
          return (
               <View style={styles.container}>
                    <View style={styles.title_container}>
                         <Text style={styles.title}>Hope you have a wonderful Christmas!</Text>
                    </View>
				<TouchableOpacity onPress={this.navigateBack} style={styles.button_container}>
					<Text style={styles.button_text}>Go Back</Text>
				</TouchableOpacity>
               </View>
          );
     }
}
export default FinishScreen;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		backgroundColor: "green",
	},
	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
	},
	title_container: {
		width: "80%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "10%",
	},
	title: {
		fontSize: 35,
		color: "white",
		textAlign: "center",
	},
	input_container: {
		height: 60,
		width: "50%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "white",
		paddingLeft: 20,
	},
	textInput: {
		fontSize: 20,
		backgroundColor: "white",
		width: "50%",
		height: 30,
	},
	button_container: {
		backgroundColor: "rgb(221, 1, 34)",
		width: "70%",
		height: 80,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginTop: 80,
	},
	button_text: {
		color: "white",
		fontSize: 40,
	},
	list_container: {
		backgroundColor: "white",
		height: "50%",
		width: "95%",
		marginTop: 15,
		padding: 20
	},
	list_item: {
		marginTop: 10,
		fontSize: 20
	},
});