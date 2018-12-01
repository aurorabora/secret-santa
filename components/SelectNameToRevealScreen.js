import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,
} from "react-native";

import { connect } from 'react-redux';

class SelectNameToRevealScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
        };
    }

    componentDidMount() {
        this.createSections();
    }

    createSections = () => {
        const { pairings, list } = this.props;

        let sectionsObject = {};
        for (let key in pairings) {
            const first_letter = key[0].toUpperCase();
            sectionsObject = Object.assign(sectionsObject, { [first_letter]: [] });
            for (let i = 0; i < list.length; i++) {
                if (list[i][0].toUpperCase() === first_letter) {
                    Object.assign(sectionsObject, { [first_letter]: [...sectionsObject[first_letter], list[i]] });
                }
            }
        };
        let sectionsArray = [];
        for (let key in sectionsObject) {
            sectionsArray.push({ title: key, data: sectionsObject[key] });
        };

        this.setState({
            sections: sectionsArray,
        });
    }

    onSelectName = (item) => {
        this.props.navigation.navigate("RevealScreen", { item });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Select Your Name!
                    </Text>
                </View>
                <View style={styles.list_container}>
                    <SectionList
                        renderItem={({ item, index, section }) => {
                            return (
                                <TouchableOpacity onPress={() => { this.onSelectName(item) }} style={styles.item_container} key={index} value={item}>
                                    <Text style={styles.list_item}>
                                        {item.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>)
                        }}
                        renderSectionHeader={({ section: { title } }) => {
                            return (
                                <View style={styles.section_title_container}>
                                    <Text style={styles.section_title}>
                                        {title}
                                    </Text>
                                </View>
                            );
                        }}
                        sections={this.state.sections}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.listReducer.list,
        pairings: state.listReducer.pairings
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SelectNameToRevealScreen);

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
});