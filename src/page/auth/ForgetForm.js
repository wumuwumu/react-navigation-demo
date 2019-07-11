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
        <Text>forget form</Text>
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
          title="Login"
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        />

        <Button
          title="push Login"
          onPress={() => {
            this.props.navigation.push("Login");
          }}
        />
      </View>
    );
  }
}
