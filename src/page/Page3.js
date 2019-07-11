import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Page3 extends Component {
  render() {
    return (
      <View>
        <Text>page3</Text>
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
      </View>
    );
  }
}
