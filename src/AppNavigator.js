import React from "react";
import { View, Text, Button } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from "react-navigation"; // Version can be specified in package.json
import SplashScreen from "react-native-splash-screen";

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "主页"
  };

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); // 这里可以自定义来设置显示时间,让其暂停1秒后,再跳转到主页面
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen hello world</Text>

        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Details" })]
              })
            );
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: "简介"
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="go to home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
