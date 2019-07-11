import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Page4 extends Component {
  render() {
    return (
      <View>
        <Text>page4</Text>
        <Button
          title="page1"
          onPress={() => {
            this.props.navigation.navigate("Page1");
          }}
        />
        <Button
          title="back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Button
          title="Page2Form2"
          onPress={() => {
            this.props.navigation.navigate("Page2Form2");
          }}
        />
        <Button
          title="Page4Form1"
          onPress={() => {
            this.props.navigation.navigate("Page4Form1");
          }}
        />
      </View>
    );
  }
}
