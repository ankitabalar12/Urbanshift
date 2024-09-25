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
    flexrowview: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "10%"
    },
    mainviewstyle: {
        height: 100,
        width: 100,
        backgroundColor: "#000",
        borderRadius: 10,
        margin: 10, justifyContent: "center"
    },
    mainviewstyle2: {
        height: 100,
        width: 100,
        backgroundColor: '#f88500',
        borderRadius: 10,
        margin: 10,
        justifyContent: "center"
    },
    secondviewstyle: {
        height: 130,
        width: "90%",
        alignSelf: "center",
        // justifyContent: "center",
        borderColor: "#000",
        borderWidth: 1
    },
    numbertext: {
        color: "#fff", fontSize: 25,
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
    },
    numbertexttwo: {
        position: "absolute",
        bottom: 5,
        color: "#fff",
        fontSize: 15,
        alignSelf: "center"

    },
    viewrowstyle: {
        flexDirection: "row", marginTop: '2%',
        marginLeft: "2%"
    }, loginimg: {
        height: 20,
        width: 20
    },
    usertext: {
        color: '#f88500',
        fontSize: 15,
        marginLeft: 10
    },
    usertext2: {
        color: "#000"
    },
    mainfoewview: {
        flexDirection: "row"
    },
    telephonestyle: {
        height: 30,
        width: 30,
        // tintColor:'#7b3333'
    },
    positionstyle: {
        position: "absolute",
        right: 30, top: 20
    },
    calltextstyle: {
        color: "#000",
        fontSize: 16,
        fontWeight: '500',
        textAlign: "center"
    },
    centerview:{
        height:1,
         width:"100%",
         alignSelf:"center",
          backgroundColor:'#000',
          marginTop:'3%'
    },
    flexrowviewin:{
        flexDirection:'row', 
        justifyContent:"space-between",
        marginHorizontal:"2.5%",
        marginTop:"1.5%"

    },
    alltextstyle:{
        color:'#000', 
        fontSize:15, 
       
    }
})