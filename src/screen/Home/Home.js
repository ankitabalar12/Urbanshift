import { Alert, AppRegistry, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { styles } from './styles'
import PushNotification from 'react-native-push-notification';
import firebase from '@react-native-firebase/app';
import {initializeApp} from '@react-native-firebase/app'; 
const Home = () => {
  // // useEffect(()=>{
  // //   getDeviceToken();
  // // },[])
  
  // // const getDeviceToken = async () => {
  // //   PushNotification.configure({
  // //     onRegister: function (token) {
  // //       console.log('TOKEN:', token);
  // //       // global.tokenId = token;
  // //       // console.log('TOKEN:', global.tokenId.token);
  // //     },
  // //   });
  // // };
  // // const firebaseConfig = {
  // //   apiKey: "AIzaSyDl5wMJo7sQvFVHmnBKZLLcrLe1-8g7HP8",
  // //   authDomain: "test-b37ee.firebaseapp.com",
  // //   projectId: "test-b37ee",
  // //   storageBucket: "test-b37ee.appspot.com",
  // //   messagingSenderId: "600909585429",
  // //   appId: "1:600909585429:android:d1f8ae613895f17511821c"
  // // };
  // // if (!firebase.apps.length) {
  // //   firebase.initializeApp(firebaseConfig);
    
  // // }
  // // AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushNotification);
 
  // useEffect(() => {
  //   // Configure push notifications
  //   const configurePushNotifications = async () => {
  //     PushNotification.configure({
  //       onRegister: function (token) {
  //         console.log('TOKEN:', token);
  //         // You can store the token or handle it as needed
  //       },

  //       onNotification: function (notification) {
  //         console.log('NOTIFICATION:', notification);
  //         // Handle foreground notifications
  //         Alert.alert(
  //           'A new notification arrived',
  //           JSON.stringify(notification),
  //         );
  //       },

  //       onBackgroundEvent: async (notification) => {
  //         console.log('Background event handled:', notification);
  //         // Handle background messages here, such as showing notifications
  //         PushNotification.localNotification({
  //           title: 'Background Message',
  //           message: JSON.stringify(notification),
  //         });
  //       },
  //     });
  //   };

  //   configurePushNotifications();
  // }, []);



  PushNotification.configure({
    smallIcon: "ic_stat_assessment",
  })
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:=======================', token);
      global.tokenId = token;
  
      global.token = global.tokenId.token;
      console.log('TOKEN:========================', );
    },
  });
  AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushNotification);
  console.log('PushNotification >> ' ,PushNotification)

  const firebaseConfig = {
     apiKey: "AIzaSyDl5wMJo7sQvFVHmnBKZLLcrLe1-8g7HP8",
     authDomain: "test-b37ee.firebaseapp.com",
     projectId: "test-b37ee",
     storageBucket: "test-b37ee.appspot.com",
     messagingSenderId: "600909585429",
     appId: "1:600909585429:android:d1f8ae613895f17511821c"
   };
   console.log('firebaseConfig >>', firebaseConfig)
   if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
    }
    console.log('firebaseConfig <<>>', firebaseConfig)
  
    const showNotification = () => {
      PushNotification.localNotification({
        channelId: 'channel-id', 
        title: 'My Notification',
        message: 'This is a test notification',
        smallIcon: 'ic_stat_assessment', 
        autoCancel: true, 
        vibrate: true, 
        vibration: 300, 
        playSound: true, 
        soundName: 'default',
      });
    };
    showNotification();
   

  return (
    <View style={styles.container}>
      <View style={styles.blackview}>
        <Text style={styles.leadatext}>{string.leada}</Text>
      </View>
      
    </View>
  )
}

export default Home

