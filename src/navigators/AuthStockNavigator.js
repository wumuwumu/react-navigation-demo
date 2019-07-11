import React from "react";
import { View } from "react-native";
import WelcomePage from "../page/WelcomePage";
import MainTab from "./AppBottomTabNavigator";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../page/auth/LoginPage";
import Forget from "../page/auth/Forget";
import ForgetForm from "../page/auth/ForgetForm";
const authStockNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Forget: {
      screen: Forget
    },
    ForgetForm: {
      screen: ForgetForm
    }
  },
  {
    // initialRouteName: "Login"
  }
);

export default authStockNavigator;
