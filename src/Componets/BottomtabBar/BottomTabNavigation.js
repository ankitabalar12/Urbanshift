import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../Helper/icons';

import Leada from '../../screen/Leada/Leada';
import Profile from '../../screen/Profile/Profile';
import AsyncStorage from '@react-native-community/async-storage';
import Logout from '../../screen/Logout/Logout';




const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogout = () => {
        Alert.alert(
          'Logout',
          'Are you sure you want to log out?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
                text: 'Logout',
                onPress: async () => {
                    await AsyncStorage.removeItem('email', email, 'password', password);
                      navigation.navigate('Login');
              },
            },
          ],
          { cancelable: false }
        );
      };
    // const { theme, themeStyles } = useTheme();
    return (

        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#a1a3a6',
            tabBarActiveTintColor: '#f39643',
            tabBarLabelStyle: {
              marginBottom: 15,
              fontSize: 10,
              fontWeight: '800'
            },
                tabBarStyle: {
                    backgroundColor:"#fff",
                    // backgroundColor: themeStyles[theme].backgroundColor,
                    borderBottomWidth: 0,
                    alignItems: 'center',
                    position: 'absolute',
                    borderColor: '#DFDFDF',
                    borderWidth: 0.5,
                    height: 70,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    justifyContent:"center",
                    //   borderRadius: 33, 
                    // marginHorizontal: '1%'
                },
            }} initialRouteName="Home">

            <Tab.Screen
                name="Leads"

                options={{
                    tabBarLabel: 'Leads',
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={icons.hotdeal}
                            style={{
                                tintColor: focused ? '#f39643' : '#a1a3a6',
                                height: 30,
                                width: 30,
                                alignSelf: 'center',
                            }}
                        />

                    ),
                }}
                component={Leada}
            />
            <Tab.Screen
                name="Profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={icons.user}
                            style={{
                                tintColor: focused ? '#f39643' : '#a1a3a6',
                                height: 25,
                                width: 25,

                                alignSelf: 'center',
                            }}
                        />

                    ),
                }}
                component={Profile} />

            <Tab.Screen
                name="LogOut"
                options={{
                    tabBarLabel: 'LogOut',
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => handleLogout()}>
                        <Image
                            source={icons.powerbutton}
                            style={{
                                tintColor: focused ? '#f39643' : '#a1a3a6',
                                height: 25,
                                width: 25,
                                alignSelf: 'center',
                            }}
                        />
                        </TouchableOpacity>

                    ),
                }}
                component={Logout}
            />


        </Tab.Navigator>

    );
}

export default BottomTabNavigation