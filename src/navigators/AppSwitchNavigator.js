import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppDrawer from "./AppDrawNavigator";
import AuthStock from "./AuthStockNavigator";

export const appSwitchNavigation = createSwitchNavigator(
  {
    AuthStock: {
      screen: AuthStock
    },
    App: {
      screen: AppDrawer
    }
  },
  {
    initialRouteName: "App"
  }
);

export default createAppContainer(appSwitchNavigation);
