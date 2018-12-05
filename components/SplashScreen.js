import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";

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
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Secret Santa!
					</Text>
                </View>
                <TouchableOpacity onPress={this.toAddList} style={styles.button_container}>
                    <Text width={width / 2} style={styles.button_text}>
                        Go!!!
                         </Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: "green",
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
        backgroundColor: "red",
        width: "40%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    button_text: {
        color: "white",
        fontSize: 40,
    },
});
