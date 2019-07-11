import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class Page2Form1 extends Component {
  render() {
    return (
      <View>
        <Text>page4 from1</Text>
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
          title="跳转Page4 from2"
          onPress={() => {
            this.props.navigation.navigate("Page4Form2");
          }}
        />
      </View>
    );
  }
}
