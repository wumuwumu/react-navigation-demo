import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import AppStockNavigator from "./AppStockNavigator";
export const appDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStockNavigator
    }
  },
  {
    drawerPosition: "left" // 抽屉在左边还是右边
  }
);

export default appDrawerNavigator;
