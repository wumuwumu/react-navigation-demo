import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class Page2Form2 extends Component {
  render() {
    return (
      <View>
        <Text>page2 form2</Text>
        <Button
          title="跳转Page3"
          onPress={() => {
            this.props.navigation.navigate("Page3");
          }}
        />

        <Button
          title="push Page3"
          onPress={() => {
            this.props.navigation.push("Page3");
          }}
        />
        <Button
          title="back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Button
          title="跳转Page2"
          onPress={() => {
            this.props.navigation.navigate("Page2");
          }}
        />
      </View>
    );
  }
}
