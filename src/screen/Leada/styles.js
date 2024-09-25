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
        marginTop: "5%"
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
        height: 140,
        width: "90%",
        alignSelf: "center",
        borderRadius:10,
        // backgroundColor:"red",
        // justifyContent: "center",
        // borderColor: "#000",
        // borderWidth: 1,
         marginTop:"5%",
         borderColor: '#E8E8E8',
        borderWidth: 1,
        backgroundColor: '#fff',
        margin: 10,
        marginLeft: 18,

        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        fontSize: 12,
        alignSelf: "center"

    },
    viewrowstyle: {
        flexDirection: "row",
        marginTop: '2%',
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
    usertext3:{
        color: "#000"
    },
    usertext2: {
        color: "#808080",
        fontSize: 14,
        marginRight:"5%"
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
        right: 30, top: 13
    },
    calltextstyle: {
        color: "#000",
        fontSize: 16,
        fontWeight: '500',
        textAlign: "center", marginTop:5
    },
    centerview:{
        height:1,
         width:'100%',
         alignSelf:"center",
          backgroundColor:'#8c8c8c',
          marginTop:'3%'
    },
    flexrowviewin:{
        flexDirection:'row', 
         justifyContent:"space-between",
         marginHorizontal:2,
         marginTop:2.5

    },
    alltextstyle:{
        color:'#a6a6a6', 
        fontSize:13, 
        margin:5, marginTop:2.5
       
    },
    textstyle:{
        color:'#000',
        fontSize:12, 
        marginTop:2.5,
        fontFamily: 'Poppins-SemiBold',
    },
    highlightedText:{
        color:'#a6a6a6', 
        fontSize:11, 
    },
    secondviewstyletwo:{
        marginTop:"5%"
    },
    marginbottom:{
        marginBottom:"30%"
    },
    adddatastyles:{
        fontSize:20, alignSelf:"center",
        marginTop:"10%",
        color:"#808080"
    },
    companynametyle:{
        fontSize:20,
        fontFamily: 'Poppins-SemiBold',
        textAlign:"center",
         color:'#000',
         marginTop:'5%', 
         marginHorizontal:'5%'
        
    }
})