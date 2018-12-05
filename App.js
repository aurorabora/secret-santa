import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from 'react-navigation';

/*********** Redux ***********/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

/************* Screens *************/
import SplashScreen from './components/SplashScreen';
import AddListScreen from './components/AddListScreen';
import CheckListScreen from './components/CheckListScreen';
import SelectNameToRevealScreen from './components/SelectNameToRevealScreen';
import RevealScreen from './components/RevealScreen';
import FinishScreen from './components/FinishScreen';

const MainNavigation = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
    },
    AddListScreen: {
        screen: AddListScreen,
    },
    CheckListScreen: {
        screen: CheckListScreen,
    },
    SelectNameToRevealScreen: {
        screen: SelectNameToRevealScreen,
    },
    RevealScreen: {
        screen: RevealScreen,
    },
    FinishScreen: {
        screen: FinishScreen,
    }
}, {
        navigationOptions: {
            gesturesEnabled: false
        },
    });

const AppNavigator = createAppContainer(MainNavigation);

export default class App extends React.Component {
    render() {

        const store = createStore(rootReducer, {}, applyMiddleware());

        // if (module.hot) {
        //     module.hot.accept('./reducers', () => {
        //       const nextRootReducer = require('./reducers');
        //       store.replaceReducer(nextRootReducer);
        //     });
        //   }

        return (
            <Provider store={store}>
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
