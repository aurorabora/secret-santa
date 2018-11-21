import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";

class AddListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			list: ["bob", "mary", "john", "jim"],
			errors: null
		};
	}

	updateInput = event => {
		this.setState({
			input: event.nativeEvent.text,
		});
	};

	renderItem = ( item ) => {
		return (
			<Text key={item.index} style={styles.list_item}>
				{item.item}
			</Text>)
	}

	renderList = () => {
		return <FlatList
			data={this.state.list}
			renderItem={this.renderItem}
			initialScrollIndex={0}
			keyExtractor={ (item) => item.index}
			getItemLayout={ (data, index) => ({length: 100, offset: 0, index: index} )}
			/>
	}

	submitInput = () => {
		let { input , list } = this.state;
		if(!input) {
			return this.setState({
				errors: "Please enter a name!"
			});
		} else {
			list.push(input);
		}

		this.setState( {
			list: list,
			errors: null,
			input: ""
		} );
	};

	render() {
		return (
			<View style={[styles.container, styles.container]}>
				<View style={styles.title_container}>
					<Text style={styles.title}>Enter everyone's name!</Text>
				</View>
				<View style={styles.row}>
					<View style={styles.input_container}>
						<TextInput
							onChange={this.updateInput}
							placeholder={"Name"}
							value={this.state.input}
							style={styles.textInput}
						/>
					</View>
					<TouchableOpacity onPress={this.submitInput} style={styles.button_container}>
						<Text style={styles.button_text}>Add!</Text>
					</TouchableOpacity>
				</View>

				<Text style={errors.error_text}>{this.state.errors}</Text>

				<View style={styles.list_container}>
					{this.renderList()}
				</View>
			</View>
		);
	}
}
export default AddListScreen;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		alignItems: "center",
		backgroundColor: "green",
	},
	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
	},
	title_container: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "10%",
	},
	title: {
		fontSize: 35,
		color: "white",
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
		backgroundColor: "red",
		width: "40%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
	button_text: {
		color: "white",
		fontSize: 40,
	},
	list_container: {
		backgroundColor: "white",
		height: "50%",
		width: "95%",
		marginTop: 30,
		padding: 20
	},
	list_item: {
		marginTop: 10,
		fontSize: 20
	},
});


const errors = StyleSheet.create({
	error_text: {
		color: "red",
		fontSize: 25,
		marginTop: 5
	}
});