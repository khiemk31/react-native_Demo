import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {LogBox} from 'react-native';
import HomeScreen from '../home/HomeScreen';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //
export enum ScreenName {
  HOME = 'HomeScreen',
}

// @ts-ignore
const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    HomeScreen: {screen: HomeScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: ScreenName.HOME,
  },
);

/**********************************************************************************************************************************
 *
 * Implement switch navigator
 *
 **********************************************************************************************************************************/

const switchNavigator = createSwitchNavigator(
  {
    AppNavigator: AppNavigator,
  },
  {
    initialRouteName: 'AppNavigator',
  },
);

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;
