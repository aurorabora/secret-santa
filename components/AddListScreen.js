import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from "react-native";
import { connect } from 'react-redux';
import { createList } from '../actions/index';

class AddListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            list: [],
            pairings: {},
		  errors: null,
		  listErrors: null,
        };
    }

    updateInput = event => {
        this.setState({
            input: event.nativeEvent.text.toUpperCase(),
        });
    };

    renderItem = (item) => {
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
            keyExtractor={(item) => item.index}
            getItemLayout={(data, index) => ({ length: 100, offset: 0, index: index })}
        />
    }

    submitInput = () => {
        let { input, list, pairings } = this.state;

        /**************************************
        /********** Data Validation ***********
        **************************************/
        for (key in pairings) {
            if (key === input) {
                return this.setState({
                    errors: "That name is already used!"
                });
            }
        }
        if (!input) {
            return this.setState({
                errors: "Please enter a name!"
            });
            /*********************************************
            /************ End Data Validation ************
            **********************************************/
        } else {
            list.push(input);
            this.setState({
                pairings: {
                    ...this.state.pairings,
                    [input]: null,
                }
            });
        }

        this.setState({
            list: list,
            errors: null,
            input: ""
        });
    };

    handleCreateList = () => {
        const { list, pairings } = this.state;
	   if( list.length < 2 ) {
		   return this.setState({
			   listErrors: "Please add at least three people!"
		   })
	   }
	   this.props.createList(list, pairings);
        this.props.navigation.navigate("CheckListScreen");
    }

    render() {
        return (
            <ImageBackground source={require('../assets/images/wallpaper.png')} style={styles.container}>
                <View style={styles.title_container}>
                    {/* <Text style={styles.title}>Enter everyone&#39;s name!</Text> */}
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
                        <Text style={styles.button_text_add}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={errors.error_text}>{this.state.errors}</Text>

                <View style={styles.list_container}>
                    {this.renderList()}
                </View>

                <TouchableOpacity onPress={this.handleCreateList} style={[navigate.button_container]}>
                    <Text style={styles.button_text}>M a k e  y o u r  l i s t !</Text>
				<Text style={errors.error_text} >{this.state.listErrors}</Text>
                </TouchableOpacity>
            </ImageBackground>
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
    createList
}
export default connect(mapStateToProps, mapDispatchToProps)(AddListScreen);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        // backgroundColor: "green",
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
        // color: "black",
        // backgroundColor: "white",
        
    },
    input_container: {
        height: 50,
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: 'white',
        borderColor:'rgb(211,211,211)',
        paddingLeft: 20,
        marginLeft: 30,
        borderRadius:40,
        marginTop:40,
        borderWidth:1,
        borderColor:'grey',
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        elevation: 3,
        shadowRadius: 3 ,
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        width: "40%",
        height: 30,
    },
    
    button_container: {
        // backgroundColor: "rgb(221, 1, 34)",
        // width: "30%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
       borderRadius: 100,
       alignItems:'center',
       justifyContent:'center',
       width:40,
       height:40,
       marginTop:40,
       position: 'relative',
       right:60,
    },
    button_text_add: {
        color: "grey",
        fontSize: 40,
    },
    button_text: {
        color: "white",
        fontSize: 25,
        paddingTop: 10,
    },
    list_container: {
        backgroundColor: "white",
        height: "50%",
        width: "80%",
        marginTop: 6,
        padding: 20,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'rgb(191,27,34)',
    },
    list_item: {
        marginTop: 10,
        fontSize: 20,
    },
});


const errors = StyleSheet.create({
    error_text: {
        color: "red",
        fontSize: 20,
        marginTop: 5
    }
});

const navigate = StyleSheet.create({
    button_container: {
        backgroundColor: "rgb(246, 185, 1)",
        padding: 5,
        width: "80%",
        height:"8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 90,
        marginTop: 20,
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        elevation: 3,
        shadowRadius: 3 ,
    },
});