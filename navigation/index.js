import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { theme } from '../constants';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Forgot
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        borderBottomColor: 'transparent',
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require('../assets/icons/back.png')} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
