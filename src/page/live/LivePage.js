import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View
} from "react-native";
import KSYVideo from "react-native-ksyvideo";

export default class LivePage extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <KSYVideo
          source={{
            uri:
              "rtmp://rtmp01open.ys7.com/openlive/342ec2e824444f36826d0641c485a1e4"
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          volume={1.0}
          muted={false}
          paused={false} // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat={true} // Repeat forever.
          playInBackground={false} // Audio continues to play when app entering background.
          progressUpdateInterval={250.0} // Interval to fire onProgress (default to ~250ms)
          // onLoadStart={this.loadStart} // Callback when video starts to load
          // onLoad={this.setDuration} // Callback when video loads
          // onProgress={this.setTime} // Callback every ~250ms with currentTime
          // onEnd={this.onEnd} // Callback when playback finishes
          // onError={this.videoError} // Callback when video cannot be loaded
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          style={styles.fullScreen}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black"
  },

  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black"
  },

  videoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  controller: {
    height: 30,
    width: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  progressBar: {
    alignSelf: "stretch",
    margin: 30
  }
});