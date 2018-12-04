import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { connect } from 'react-redux';
import { updateList , createSections } from '../actions/index';

class RevealScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedName: props.navigation.state.params.item,
            reveal: null,
            switch: 'button',
            loadingMessage: "boop beep beep boop",
        };

        this.loading;
    }

    pressRevealButton = () => {
        this.setState({
            reveal: this.props.pairings[this.state.selectedName],
            switch: 'loading',
        });
    }

    pressNavigateButton = () => {
        let newPairings = this.props.pairings;
        delete newPairings[this.state.selectedName];
        const newList = Object.keys(newPairings);
        this.props.updateList(newList , newPairings);
        this.props.createSections(newList, newPairings);
        if (!newList.length) {
            return this.props.navigation.navigate("FinishScreen");
        }
        this.props.navigation.navigate("SelectNameToRevealScreen", { refresh: () => { console.log("refreshed") } });
    }

    renderLoader = () => {
        setTimeout(() => {
            this.setState({
                switch: "secretSanta",
            });
        }, 1000);

        return (<Text style={styles.title} > {this.state.loadingMessage}</Text>)
    }


    revealSwitch = () => {
        switch (this.state.switch) {
            case 'button':
                return this.renderRevealButton();
            case 'loading':
                return this.renderLoader();
            case 'secretSanta':
                return this.renderSecretSanta();
            default:
                return this.renderRevealButton();
        };
    }

    renderRevealButton = () => {
        return (
            <TouchableOpacity onPress={this.pressRevealButton} style={styles.button_container}>
                <Text style={styles.button_text}>
                    Reveal!
                </Text>
            </TouchableOpacity>
        )
    }

    renderSecretSanta = () => {
        const { list } = this.props;
        return (
            <View style={{ width: "100%", height: '100%', display: 'flex', flexDirection: 'column' }}>
                <View style={[styles.title_container, { marginTop: 20 }]}>
                    <Text style={styles.title}>
                        {this.state.reveal}!
                    </Text>
                    <Text style={[styles.title, { fontSize: 25, marginTop: 30 }]}>Remember to write it down!</Text>
                </View>

                <View style={navigate.nav_button_container}>
                    <TouchableOpacity onPress={this.pressNavigateButton} style={navigate.button_container}>
                        <Text style={styles.button_text}>{list.length == 1 ? "Finish!" : "Pass the phone!" }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>{this.state.selectedName}, you have ...</Text>
                </View>
                {this.revealSwitch()}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.listReducer.list,
        pairings: state.listReducer.pairings,
    };
}

const mapDispatchToProps = {
    updateList,
    createSections,
};

export default connect(mapStateToProps, mapDispatchToProps)(RevealScreen);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "green",
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
    section_title_container: {
        width: "100%",
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 5
    },
    section_title: {
        fontWeight: "bold",
        fontSize: 15,
    },
    list_container: {
        backgroundColor: "white",
        height: "50%",
        width: "95%",
        marginTop: 15,
    },
    item_container: {
        width: "100%",
        margin: 10,
    },
    list_item: {
        fontSize: 20,
        marginLeft: 10,
    },
    button_container: {
        backgroundColor: "rgb(221, 1, 34)",
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        height: 70,
        marginTop: 20
    },
    button_text: {
        color: "white",
        fontSize: 35,
    },
});

const navigate = StyleSheet.create({
    nav_button_container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_container: {
        backgroundColor: "rgb(246, 185, 1)",
        padding: 10,
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
});