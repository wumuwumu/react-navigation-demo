import React from "react";

import { StackActions, NavigationActions } from "react-navigation";

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      SplashScreen.hide();
      // 重置路由
      // let actions = StackActions.push({
      //   routeName: "Home",
      //   params: {
      //     myUserId: 9
      //   }
      // });
      let actions = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Home",
            params: {
              titleHeader: "主页"
            }
          })
        ]
      });
      this.props.navigation.dispatch(actions);
    }, 1000);
  }

  render() {
    return null;
  }
}
