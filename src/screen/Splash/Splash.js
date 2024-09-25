import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import AsyncStorage from '@react-native-community/async-storage'

const Splash = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
   useEffect(() => {
        async function fetchData() {
          setLoading(true);
          const result = await AsyncStorage.getItem('email');
          
          console.log('result',result);
          // alert('11');
          if (result) {
          navigation.navigate('Leada');
          } else {
            navigation.navigate('Login');
          }
          setLoading(false);
        }
        fetchData();
      }, []);
    return (
        <View style={styles.container}>
           <StatusBar
        backgroundColor="#000" 
        barStyle="light-content" 
      />
            <Image source={icons.uslogouran} style={styles.uraband} />
            {/* <Text style={styles.UrbanShifttextstyle}>{string.UrbanShift}</Text> */}
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  backgroundColor: "#f88500",
         backgroundColor:'#000',
          justifyContent: 'center',
           alignItems: "center"
    },
    uraband: {
        height: 250, width: 250
    },
    UrbanShifttextstyle: {
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        // textAlign: "center",
    }
})