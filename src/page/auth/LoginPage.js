import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { StackActions, NavigationActions, Actions } from "react-navigation";

export default class LoginPage extends Component {
  // static navigationOptions = {
  //   title: "Login"
  // };
  render() {
    return (
      <View>
        <Text>login</Text>
        <Button
          title="登录"
          onPress={() => {
            // this.props.getUser();
            // 跳转到tab page1
            // let actions = StackActions.reset({
            //   index: 0,
            //   actions: [
            //     NavigationActions.navigate({
            //       routeName: "Main",
            //       params: {
            //         titleHeader: "首页"
            //       }
            //     })
            //   ]
            // });
            // this.props.navigation.dispatch(actions);
            // 跳转到page2
            // let actions = StackActions.reset({
            //   index: 0,
            //   actions: [
            //     NavigationActions.navigate({
            //       routeName: "Main"
            //     }),
            //     NavigationActions.navigate({
            //       routeName: "Page2"
            //     })
            //   ]
            // });
            this.props.navigation.navigate("App");
          }}
        />

        <Button
          title="back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />

        <Button
          title="forget"
          onPress={() => {
            this.props.navigation.navigate("Forget");
          }}
        />
      </View>
    );
  }
}
