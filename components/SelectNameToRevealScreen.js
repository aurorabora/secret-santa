import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,
} from "react-native";

import { connect } from 'react-redux';
import { createSections } from '../actions/index';

class SelectNameToRevealScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
        };
    }

    componentDidMount() {
        this.props.createSections(this.props.list , this.props.pairings);
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
                        sections={this.props.sections || []}
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
        pairings: state.listReducer.pairings,
        sections: state.listReducer.sections,
    }
}

const mapDispatchToProps = {
    createSections
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