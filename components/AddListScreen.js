import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { connect } from 'react-redux';
import { createList } from '../actions/index';

class AddListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			list: ["bob", "mary", "john", "jim"],
			pairings: {
				bob: null,
				mary: null,
				john: null,
				jim: null,
			},
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
		let { input , list , pairings } = this.state;
		for ( key in pairings ) {
			if ( key === input ) {
				return this.setState( {
					errors: "That name is already used!"
				} );
			}
		}
		if(!input) {
			return this.setState({
				errors: "Please enter a name!"
			});
		} else {
			list.push(input);
			this.setState( {
				pairings: {
					...this.state.pairings,
					[input]: null,
				}
			} );
		}

		this.setState( {
			list: list,
			errors: null,
			input: ""
		} );
	};

	handleCreateList = () => {
		const { list , pairings } = this.state;
		this.props.createList(list , pairings);
		this.props.navigation.navigate("CheckListScreen");
	} 

	render() {
		this.props;
		return (
			<View style={[styles.container, styles.container]}>
				<View style={styles.title_container}>
					<Text style={styles.title}>Enter everyone&#39;s name!</Text>
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
					<TouchableOpacity onPress={this.submitInput} style={[styles.button_container]}>
						<Text style={styles.button_text}>Add!</Text>
					</TouchableOpacity>
				</View>

				<Text style={errors.error_text}>{this.state.errors}</Text>

				<View style={styles.list_container}>
					{this.renderList()}
				</View>

				<TouchableOpacity onPress={this.handleCreateList} style={[navigate.button_container]}>
					<Text style={styles.button_text}>Make your list!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

function mapStateToProps( state ) {
	return {
		list: state.listReducer.list,
		pairings: state.listReducer.pairings
	}
} 

const mapDispatchToProps = {
	createList
}
export default connect( mapStateToProps , mapDispatchToProps )(AddListScreen);

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
		backgroundColor: "rgb(221, 1, 34)",
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
		marginTop: 15,
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

const navigate = StyleSheet.create({
	button_container: {
		backgroundColor : "rgb(246, 185, 1)",
		padding: 10,
		width: "80%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginTop: 20,
	},
});