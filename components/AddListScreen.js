import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import styles from "../styles";

class AddListScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.title_container}>
					<Text style={styles.title} >Enter everyone's name!</Text>
				</View>
			</View>
		);
	}
}
export default AddListScreen;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
