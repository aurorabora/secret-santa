import React, { Component } from "react";
import { 
     View,
     Text,
     StyleSheet,
     FlatList
} from "react-native";
import { connect } from 'react-redux';

class CheckListScreen extends Component {
     render() {
          return (
               <View style={styles.container}>
                    <View style={styles.title_container}>
                         <Text style={styles.title}>Check it twice!</Text>
                    </View>
                    <View style={styles.list_container} >
                         <FlatList
                              data={this.props.list}
                              renderItem={(item) => {
                                   return (
                                        <Text key={item.index} style={styles.list_item}>
                                             {item.item}
                                        </Text>
                                   )
                              }}
                              initialScrollIndex={0}
                              keyExtractor={(item) => item.index}
                              getItemLayout={(data, index) => ({ length: 100, offset: 0, index: index })}
                         />
                    </View>
               </View>
          );
     }
}

function mapStateToProps( state ) {
     return {
          list: state.listReducer.list,
          pairings: state.listReducer.pairings,
     }
}

export default connect( mapStateToProps )(CheckListScreen);

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