import {NavigationContainer, NavigationState} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

import sizes from '../../../res/sizes';
import AppContainer from './AppContainer';
import AlertBase from '../../../components/AlertBase';
import PopupAlertBase from '../../../components/PopupAlertBase';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height, width} = Dimensions.get('window');

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? sizes._44sdp : sizes._20sdp,
  android: StatusBar.currentHeight,
  default: 0,
});

export const showBaseAlert = (
  description: string,
  textOk: string,
  textCancel?: string,
  title?: string,
  onPressPrimaryEvent?: () => void,
  onPressSecondaryEvent?: () => void,
) => {
  if (alertBase == null) {
    return;
  }
  alertBase.open({
    title: title,
    description: description,
    textOk: textOk,
    textCancel: textCancel,
  });
  alertBase.onPressPrimaryEvent(async () => {
    alertBase.close(() => {
      if (onPressPrimaryEvent) {
        onPressPrimaryEvent();
      }
    });
  });
  alertBase.onPressSecondaryEvent(async () => {
    alertBase.close(() => {
      if (onPressSecondaryEvent) {
        onPressSecondaryEvent();
      }
    });
  });
};

interface Props {
  navigation?: any;
}

export let alertBase: AlertBase;
export let PopupEvent: PopupAlertBase;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar = ({backgroundColor, ...props}: any) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
class App extends Component<Props> {
  state = {
    isLogin: false,
  };

  componentDidMount = async () => {};

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <LinearGradient
          colors={['#0682e6', '#06cbd8']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={{
            height: getStatusBarHeight(55),
          }}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle="light-content"
          />
        </LinearGradient> */}

        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <AppContainer />
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
