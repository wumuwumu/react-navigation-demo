import React from "react";
import { View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import Page4Form1 from "../page/page4/Page4Form1";
import Page4Form2 from "../page/page4/Page4Form2";
const authStockNavigator = createStackNavigator(
  {
    Page4Form1: {
      screen: Page4Form1
    },
    Page4Form2: {
      screen: Page4Form2
    },
  },
  {
    // initialRouteName: "Login"
  }
);

export default authStockNavigator;
