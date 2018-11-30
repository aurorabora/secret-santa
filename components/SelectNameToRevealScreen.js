import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SectionList,
} from "react-native";

import { connect } from 'react-redux';

class SelectNameToRevealScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: null,
        };
        this.createSections();
    }

    createSections = () => {
        const { pairings, list } = this.props;

        let sectionsObject = {};
        for (key in pairings) {
            const first_letter = key[0];
            sectionsObject = Object.assign(sectionsObject, { [first_letter]: null });
            // for (let i = 0; i < list.length; i++) {
            //     if (list[i][0] === first_letter) {
            //         sectionsObject = {
            //             [first_letter]: list[i]
            //         }
            //     }
            // }
        }
        console.log(sectionsObject);
        debugger;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Select Your Name!
                    </Text>
                </View>
                <SectionList
                    renderItem={({ item, index, section }) => (
                        <Text key={index}>
                            {item}
                        </Text>)}
                />
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