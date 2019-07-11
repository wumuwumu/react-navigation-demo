import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { SwitchActions } from "react-navigation";

export default class Page1 extends Component {
  render() {
    return (
      <View>
        <Text>page1</Text>
        <Button
          title="切换drawer"
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        />

        <Button
          title="跳转login"
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        />

        <Button
          title="跳转live"
          onPress={() => {
            this.props.navigation.navigate("LivePage");
          }}
        />
        <Button
          title="back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text>212122</Text>
        <Button
          title="forget"
          onPress={() => {
            this.props.navigation.navigate("Forget");
          }}
        />
        <Button
          title="forgetForm"
          onPress={() => {
            this.props.navigation.navigate("ForgetForm");
          }}
        />

        <Button
          title="page2"
          onPress={() => {
            this.props.navigation.navigate("Page2");
          }}
        />
      </View>
    );
  }
}
