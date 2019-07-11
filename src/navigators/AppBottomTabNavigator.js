import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Page1 from "../page/Page1";
import Page2 from "../page/Page2";
import Page3 from "../page/Page3";
import Page4Stock from "./Page4StockNavigator";

import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const AppTabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        title: "消息",
        tabBarLabel: "Page1",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-home" : "ios-home"}
            size={24}
            color={"#999"}
          />
        )
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: "消息",
        tabBarLabel: "Page2",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-body" : "ios-body"}
            size={24}
            color={"#999"}
          />
        )
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        title: "消息",

        tabBarLabel: "Page3",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-person" : "ios-person"}
            size={24}
            color={"#999"}
          />
        )
      }
    },
    Page4: {
      screen: Page4Stock,
      navigationOptions: {
        title: "page4",

        tabBarLabel: "Page4",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-person" : "ios-person"}
            size={24}
            color={"#999"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? "#e91e63" : "#fdf"
    },
    initialRouteName: "Page1",
    navigationOptions: {}
  }
);

export default AppTabNavigator;
