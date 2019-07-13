import React, {Component} from 'react';


import {
  Text,
  View,
  Image,
  Platform,
  Animated,
  TouchableOpacity,
  Alert,
  ScrollView,
  TouchableHighlight,
  InteractionManager,
  StyleSheet,
  BackHandler
} from 'react-native';

import VideoPlayer , {defaultVideoHeight, isSystemIOS, statusBarHeight}  from './video/VideoPlayer';
import Orientation from 'react-native-orientation';


class CameraLiveComponent extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
  })


  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      videoHeight: defaultVideoHeight
    };
    BackHandler.addEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.addOrientationListener(this._orientationDidChange);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  componentDidMount() {
    // const {actions, navigation} = this.props;
    // InteractionManager.runAfterInteractions(() => {
    //   actions.getCameraLive(navigation.state.params.id);
    // })
  }

  componentWillMount() {
    // const {actions, navigation} = this.props;
    // actions.getCameraLive(navigation.state.params.id);
  }


  render() {
    let {cameraLive,navigation} = this.props;
    let statusBarView = null;
    let videoTopHeight = 0;
    if (isSystemIOS) {
      statusBarView =
        (<View style={[{backgroundColor:'#000'}, this.state.isFullScreen ? {height: 0} : {height: statusBarHeight}]}/>);
      videoTopHeight = this.state.isFullScreen ? 0 : statusBarHeight;
    }
    return (
      <View style={{flex:1}} onLayout={this._onLayoutChange}>
        {/*{cameraLive.data && cameraLive.data.rtmp_hd ? <KSYVideo*/}
          {/*ref={(video)=>{this.video = video}}*/}
          {/*source={{uri: cameraLive.data.rtmp_hd}}*/}
          {/*bufferSize={30}*/}
          {/*bufferTime={4}*/}
          {/*repeat={true}*/}
          {/*mirror={this.state.mirror}*/}
          {/*degree={this.state.degree}*/}
          {/*resizeMode={'contain'}*/}
          {/*volume={this.state.volume}*/}
          {/*onTouch={()=>{*/}
            {/*this.setState({showbar: !this.state.showbar})*/}
          {/*}}*/}
          {/*style={styles.fullScreen}*/}
        {/*/> : <View><Text>暂无数据</Text></View>}*/}
        {/*<Video source={{uri: cameraLive.data.hd_address}}   // Can be a URL or a local file.*/}
               {/*ref={(ref) => {*/}
                 {/*this.player = ref*/}
               {/*}}*/}
               {/*controls={true}// Store reference*/}
               {/*style={styles.videoView} />*/}

        {/*{cameraLive.data.hd_address && <VideoPlayer*/}
          {/*style={styles.videoView}*/}
          {/*source={{uri: cameraLive.data.hd_address}}*/}
          {/*// navigator={ this.props.navigator }*/}
        {/*/>}*/}
        <VideoPlayer
          ref={(ref) => this.videoPlayer = ref}
          style={{position:'absolute', left: 0, top: videoTopHeight}}
          videoURL={"http://hls01open.ys7.com/openlive/478766981df14649ba27c70f4fc4332f.hd.m3u8"}
          videoTitle={""}
          onChangeOrientation={this._onOrientationChanged}
          onTapBackButton={this._onClickBackButton}
        />
      </View>
    )
  }

  /// 处理安卓物理返回键，横屏时点击返回键回到竖屏，再次点击回到上个界面
  _backButtonPress = () => {
    console.log("点击返回")
    if (this.state.isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      this.props.navigation.goBack();
    }
    return true;
  };

  _orientationDidChange = (orientation) => {
    if (orientation === 'PORTRAIT') {
      // this.props.navigation.setParams({header:  undefined})
    } else {
      // this.props.navigation.setParams({header: null })
    }
  };

  _onLayoutChange = (event) => {
    let {x, y, width, height} = event.nativeEvent.layout;
    let isLandscape = (width > height);
    console.log("layoutchange",isLandscape,event)

    if (isLandscape) {
      this.setState({
        isFullScreen: true,
        videoHeight: height
      });
      this.videoPlayer.updateLayout(width, height, true);
    } else {
      this.setState({
        isFullScreen: false,
        videoHeight: width * 9/16
      });
      this.videoPlayer.updateLayout(width, width * 9/16, false);
    }
    // Orientation.unlockAllOrientations();
  };

  _onOrientationChanged = (isFullScreen) => {
    console.log("全屏改变")
    if (isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscapeRight();
    }
  };

  _onClickBackButton = () => {
    this.props.navigation.goBack();
  };
}
export default CameraLiveComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
  },

  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
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
  },
});
