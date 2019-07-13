import React, { Component } from "react";
import { Text, View, Button,StyleSheet } from "react-native";
import { SwitchActions } from "react-navigation";
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

export default class VideoPage extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings!',
    headerRight:<Button title="返回"></Button>
  };
  render() {
    return (
      <View style={{flex:1}}>
        <Text>video</Text>
       
        <Button
          title="ImagePicker"
          onPress={() => {
            this.props.navigation.navigate("ImagePicker");
          }}
        />

    <Video source={{uri: "http://hls01open.ys7.com/openlive/478766981df14649ba27c70f4fc4332f.hd.m3u8"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
    //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //    onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
