import React from "react";
import { View } from "react-native";
import WelcomePage from "../page/WelcomePage";
import MainTab from "./AppBottomTabNavigator";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Page2Form1 from "../page/page2/Page2Form1";
import Page2Form2 from "../page/page2/Page2Form2";
import ImagePicker from '../page/image-picker/index'
// import LivePage from '../page/live/LivePage'
import Video from '../page/video/CameraLive'
const appStockNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTab
    },
    WelcomePage: {
      screen: WelcomePage
    },
    Page2Form1: {
      screen: Page2Form1
    },
    Page2Form2: {
      screen: Page2Form2
    },
    ImagePicker:{
      screen: ImagePicker
    },
    Video:{
      screen:Video
    }
  },
  {
    initialRouteName: "Main"
  }
);

export default appStockNavigator;
