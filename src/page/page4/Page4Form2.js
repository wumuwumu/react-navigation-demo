import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class Page2Form1 extends Component {
  render() {
    return (
      <View>
        <Text>page4 from2</Text>
        <Button
          title="跳转Page3"
          onPress={() => {
            this.props.navigation.navigate("Page3");
          }}
        />
        <Button
          title="back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />

        <Button
          title="跳转Page2 from2"
          onPress={() => {
            this.props.navigation.navigate("Page2Form2");
          }}
        />
      </View>
    );
  }
}
