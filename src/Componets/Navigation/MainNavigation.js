import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import Onbord from '../../Screen/Onbord/Onbord'
import { DarkTheme, LightTheme, ThemeProvider ,initializeTheme} from '../ThemeContext'
import Home from '../../screen/Home/Home'
import Login from '../../screen/Login/Login'
import Profile from '../../screen/Profile/Profile'
import BottomTabNavigation from '../BottomtabBar/BottomTabNavigation'
import Leada from '../../screen/Leada/Leada'
import Splash from '../../screen/Splash/Splash'
import PushNotification from 'react-native-push-notification';
import firebase from '@react-native-firebase/app';
// import { AppRegistry } from 'react-native';

// PushNotification.configure({
//   smallIcon: "ic_stat_assessment",
// })
// PushNotification.configure({
//   onRegister: function (token) {
//     console.log('TOKEN:=======================', token);
//     global.tokenId = token;
//     global.token = global.tokenId.token;
  
//   },
// });

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('NOTIFICATION <><><>', notification);
//     // Handle received notifications, e.g., display in-app notification
//   },
//   popInitialNotification: true,
//   requestPermissions: true,

// });
const firebaseConfig = {
  apiKey: "AIzaSyBuWYO44QmF6nuGBRJd8xuackXMEWND4Rk",
  authDomain: "urbanshift-dd8ff.firebaseapp.com",
  projectId: "urbanshift-dd8ff",
  storageBucket: "urbanshift-dd8ff.appspot.com",
  messagingSenderId: "177082323282",
  appId: "1:177082323282:web:5d4474dbd87dd72c3cea8b"
  
 };


 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

PushNotification.configure({
  smallIcon: "ic_stat_assessment",
})
PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:=======================', token);
    global.tokenId = token;

    global.token = global.tokenId.token;

    // alert(global.token);
    // console.log('TOKEN:========================', );
  },
});
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushNotification);

// PushNotification.configure({
//   smallIcon: "ic_stat_assessment",
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//     global.tokenId = token;
//     global.token = global.tokenId.token;
//   },
//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);
  
//   },
//   popInitialNotification: true,
//   requestPermissions: true
// });

// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushNotification);
// console.log('PushNotification >> ' ,PushNotification)

// const firebaseConfig = {
//    apiKey: "AIzaSyDl5wMJo7sQvFVHmnBKZLLcrLe1-8g7HP8",
//    authDomain: "test-b37ee.firebaseapp.com",
//    projectId: "test-b37ee",
//    storageBucket: "test-b37ee.appspot.com",
//    messagingSenderId: "600909585429",
//    appId: "1:600909585429:android:d1f8ae613895f17511821c"
//  };
//  console.log('firebaseConfig >>', firebaseConfig)
//  if (!firebase.apps.length) {
//    firebase.initializeApp(firebaseConfig);
//   }
//   console.log('firebaseConfig <<>>', firebaseConfig)

//   const showNotification = () => {
//     PushNotification.localNotification({
//       channelId: 'channel-id', 
//       title: 'My Notification',
//       message: 'This is a test notification',
//       smallIcon: 'ic_stat_assessment', 
//       autoCancel: true, 
//       vibrate: true, 
//       vibration: 300, 
//       playSound: true, 
//       soundName: 'default',
//     });
//   };
//   showNotification();
 


// PushNotification.configure({
//   smallIcon: "ic_stat_assessment",
// })
// const firebaseConfig = {
//   apiKey: "AIzaSyDl5wMJo7sQvFVHmnBKZLLcrLe1-8g7HP8",
//   authDomain: "test-b37ee.firebaseapp.com",
//   projectId: "test-b37ee",
//   storageBucket: "test-b37ee.appspot.com",
//   messagingSenderId: "600909585429",
//   appId: "1:600909585429:android:d1f8ae613895f17511821c"
// };
// if (!firebase.apps.length) {
//   firebase.firebase(firebaseConfig);
  
// }











const stack = createStackNavigator()

global.url = 'https://urbanshift.in/api/UserInfo'
const MainNavigation = () => {
  const { theme } = useTheme();
   return (
    <ThemeProvider>
      <NavigationContainer theme={theme === 'light' ? LightTheme : DarkTheme}>
        <stack.Navigator initialRouteName='Splash'>
        <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Home" component={Home} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Leada" component={BottomTabNavigation} options={{ headerShown: false }}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default MainNavigation

