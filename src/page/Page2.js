import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Page2 extends Component {
  render() {
    return (
      <View>
        <Text>page2</Text>
        <Button
          title="跳转Page2Form1"
          onPress={() => {
            this.props.navigation.navigate("Page2Form1");
          }}
        />

        <Button
          title="back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />

        <Button
          title="page3"
          onPress={() => {
            this.props.navigation.navigate("Page3");
          }}
        />
      </View>
    );
  }
}
