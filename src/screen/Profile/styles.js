import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    blackview: {
        height: 60,
        width: "100%",
        backgroundColor: "#000",
        justifyContent: "center"
    },
    leadatext: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
    },
    mainview: {
        marginTop:'10%',
        height: 50,
        width: "90%",
        backgroundColor:"#fff",
        alignSelf: "center",
        borderColor:"#f2f2f2",
        borderRadius:50,
         borderWidth:1,
         justifyContent:"center",
         shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    textstyle:{
        color:"#333333", 
        marginLeft:"3%"
    },
    highlightedText:{
        color:'#000',
         fontSize:15,
         fontFamily: 'Poppins-SemiBold',

    },
    mainviewtow:{
        marginTop:'4%'
    },
    marbottom:{
        marginTop:"10%"
    }
})