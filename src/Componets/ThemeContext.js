// ThemeContext.js
import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const retrieveTheme = async () => {
      try {
        // Retrieve the theme preference from AsyncStorage
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme !== null) {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.error('Error retrieving theme preference:', error);
      }
    };
   retrieveTheme();
    // return () => {
    //   navigation.removeListener('focus');
  // };
  }, []); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    light: {
      backgroundColor: '#f2f2f2',
      backgroundColorofood:"#e6e6e6",
      textColor: '#000',
      textorder:'#6e706f',
      iconColor:'#000',
      whitecolor:'#fff'
     
    },
    dark: {
      backgroundColor: '#000',
      textColor: '#fff',
      textorder:'#f2f2f2',
      iconColor:'#fff',
      whitecolor:'#fff',
      ordertextcolor:'#000',
      backgroundColorbox:'#e6e6e6',
      backgroundColorview:'#b3b3b3',
      backgroundColorwhite:'#fff',
      onbordtext:'#f39643'
      

    },
  };
  const themeStylestext = {
    light: {
      backgroundColor: 'white',
      textColor: 'red',
    },
    dark: {
      backgroundColor: 'black',
      textColor: 'yellow',
    },
  }
  // const updateThemeForAllScreens = newTheme => {
  //   setTheme(newTheme);
  // };
  const updateThemeForAllScreens = newTheme => {
   
    setTheme(newTheme);
   
    AsyncStorage.setItem('theme', newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles, updateThemeForAllScreens, themeStylestext }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
