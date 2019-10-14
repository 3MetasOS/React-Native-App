import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen} from "../screens/login-screen"
import { RegisterScreen } from "../screens/register-screen"

export const LoginNavigator = createStackNavigator(
  {
    login: { screen: LoginScreen, navigationOptions: {header: null} },
    register: { screen: RegisterScreen, navigationOptions: { headerBackTitle: 'Back' } } 
  },
  {
    // headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)

// /**
//  * A list of routes from which we're allowed to leave the app when
//  * the user presses the back button on Android.
//  *
//  * Anything not on this list will be a standard `back` action in
//  * react-navigation.
//  */
// export const exitRoutes: string[] = ["welcome"]
