import { createSwitchNavigator } from 'react-navigation';
import { PrimaryNavigator } from "./primary-navigator"
import { LoginNavigator } from "./login-navigator"
import { appNavigator } from "./app-navigator"

export const RootNavigator = createSwitchNavigator(
  {
    primaryStack: { screen: PrimaryNavigator },
    loginStack: { screen: LoginNavigator },
    appDrawer: { screen: appNavigator },
  },
  {
    initialRouteName: 'primaryStack',
    navigationOptions: { gesturesEnabled: false },
  },
)
