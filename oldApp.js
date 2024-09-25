import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { setTopLevelNavigation } from './NavigationHelper';
import Splash from './src/screens/Splash/Splash';
import Changepass from './src/screens/Changepass/Changepass';
import Conformation from './src/screens/Conformation/Conformation';
import Detail from './src/screens/Detail/Detail';
import Editprofile from './src/screens/Editprofile/Editprofile';
import Firstp from './src/screens/Firstp/Firstp';
import Forgotpass from './src/screens/Forgotpass/Forgotpass';
import Home from './src/screens/Home/Home';
import Inbox from './src/screens/Inbox/Inbox';
import Login from './src/screens/Login/Login';
import Newappm from './src/screens/Newappm/Newappm';
import Reschle from './src/screens/Reschle/Reschle';
import Setting from './src/screens/Setting/Setting';
import Support from './src/screens/Support/Support';
import Terms from './src/screens/Terms/Terms';
import Upcomingapp from './src/screens/Upcomingapp/Upcomingapp';

const stack = createStackNavigator()


export default function App({ navigation }) {
  return (
    <NavigationContainer independent ref={(ref) => setTopLevelNavigation(ref)}>
      <stack.Navigator initialRouteName='Splash'>
        <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Changepass" component={Changepass} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Firstp" component={Firstp} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Forgotpass" component={Forgotpass} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Home" component={Home} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Setting" component={Setting} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Editprofile" component={Editprofile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Support" component={Support} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Terms" component={Terms} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Upcomingapp" component={Upcomingapp} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Newappm" component={Newappm} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Conformation" component={Conformation} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Reschle" component={Reschle} options={{ headerShown: false }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};
App.js

