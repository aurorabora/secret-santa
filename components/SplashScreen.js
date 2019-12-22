import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    Animated,
} from "react-native";

// // *************** Fonts *************************/
// import { Fonts } from './src/utils/fonts';


class SplashScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    toAddList = () => {
        this.props.navigation.navigate("AddListScreen");
    }

    render() {
        const { width, height } = Dimensions;

        return (
            <ImageBackground source={require('../assets/images/secretsanta.png')} style={styles.container}>
                <View style={styles.title_container}>
                    {/* <Text style={styles.title}>
                        Secret Santa!
					</Text> */}
                </View>
                <TouchableOpacity onPress={this.toAddList} style={styles.button_container}>
                    <Text width={width / 2} style={styles.button_text}>
                        S T A R T
                         </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "green",
    },
    title_container: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: "50%"
    },
    title: {
        fontSize: 50,
        color: "white"
    },
    button_container: {
        backgroundColor: 'rgb(191,27,34)',
        width: "80%",
        height: "8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 90,
        marginTop: 100,
        shadowColor: 'grey',
        shadowOpacity: 0.4,
        elevation: 3,
        shadowRadius: 10 ,
        shadowOffset : { width: 33, height: 13},
        
    },
    button_text: {
        color: "white",
        fontSize: 40,
        // fontFamily: Fonts.Roboto,
    },
});
