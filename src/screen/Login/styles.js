import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    maniview: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        width: "100%",
        backgroundColor: '#f88500',
        borderTopLeftRadius: 200,
        borderTopRightRadius: -50,
    },
    maniviewtop: {
        overflow: 'hidden', width: 105,
        backgroundColor: '#f88500',
        height: 190,
        width: "100%",
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: -50,
        borderBottomRightRadius: 200,

    },
    flexworstyle: {
        flexDirection: "row",
        alignSelf: 'center',
        marginTop: "20%",
    },
    ustextlogo: {
        height: 60,
        width: 60,
        backgroundColor: "#000",
        borderRadius: 50,

        justifyContent: "center"

    },
    ustext: {
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        textAlign: "center",

    },
    urbandtext: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        marginTop: '2%',
        marginLeft: '2%'
    },
    indiasSe: {
        fontSize: 15,
        marginLeft: '5%',
        marginTop: -8,
        color: '#000',
    },
    PartnerDas: {
        marginTop: "15%",
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        textAlign: "center",
    },
    textinputview: {
        height: 50,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginTop: 20,
        borderColor: "#CCCBCB",
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        marginLeft: '5%',

    },
    erroetext: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
        alignSelf: 'flex-start',
        marginLeft: '9%'
    },
    boebuttonstyle: {
        flexDirection: "row",
        marginTop: "10%",
        justifyContent: "space-between",
        marginHorizontal: "7%"
    },
    bottonstyle: {
        height: 30,
        width: "33%",
        backgroundColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: "center", marginTop: '10%'
    },
    flexdractionrow: {
        flexDirection: "row",
        alignSelf: 'center'

    },
    logintext: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 9
    },
    loginimg: {
        height: 20,
        width: 20,
        tintColor: "#fff",
    },
    urabanimg: {
        height: 50,
        width: 250,
        marginTop: "25%",
        alignSelf: "center"
    }

})