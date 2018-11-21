import { StyleSheet } from "react-native";


export default StyleSheet.create({
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
     } ,
	title: {
          fontSize: 45,
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
