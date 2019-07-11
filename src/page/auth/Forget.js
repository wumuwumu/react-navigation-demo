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
        <Text>forget</Text>
        <Button
          title="App"
          onPress={() => {
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
          title="Page1"
          onPress={() => {
            this.props.navigation.navigate("Page1");
          }}
        />
        <Button
          title="forgetForm"
          onPress={() => {
            this.props.navigation.navigate("ForgetForm");
          }}
        />
      </View>
    );
  }
}
