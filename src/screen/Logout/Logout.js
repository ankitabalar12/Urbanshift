import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            navigation.navigate('Leada');
          },
        }, 
        {
          text: 'Logout',
          onPress: async () => {
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('password');
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    handleLogout();
  }, []); // Empty dependency array means this effect runs only on mount

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleLogout()}>
      <Text style={styles.text}>Logging out...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
