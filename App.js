import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator , createAppContainer } from 'react-navigation';

/************* Screens *************/
import SplashScreen from './components/SplashScreen';
import AddListScreen from './components/AddListScreen';

/*********** Redux ***********/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const MainNavigation = createStackNavigator({
	SplashScreen: {
		screen: SplashScreen
	},
	AddListScreen: {
		screen: AddListScreen
	}
} , {
	navigationOptions: {
		gesturesEnabled: false
	}
} );

const AppNavigator = createAppContainer(MainNavigation)

export default class App extends React.Component {
	render() {
		
		// const store = createStore(rootReducer, {}, applyMiddleware());

		return (
			<Provider>
				<AppNavigator />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
