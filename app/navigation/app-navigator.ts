import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { DashboardScreen } from "../screens/dashboard-screen"
import { AboutusScreen } from "../screens/aboutus-screen"
import { DemoScreen} from "../screens/demo-screen"

export const AboutStack = createStackNavigator({ // For header options
  AboutUs: { screen: AboutusScreen }},
  {
    headerMode: "none"
  }
)

export const tabsNavigator = createBottomTabNavigator({
  TabOne: {
    screen: DashboardScreen,
    navigationOptions: {
      title: 'Dashboard'
    }
  },
  TabTwo: {
    screen: DemoScreen,
    navigationOptions: {
      title: 'Demo Screen'
    }
  }
})

export const appNavigator = createDrawerNavigator({
  dashboard: { screen: tabsNavigator  },
  about: {
    screen: AboutStack,
    navigationOptions: {
      title: 'About Us',  // Text shown in left menu
    }
  }
},
  { 
    // initialRouteName: 'dashboard',
    drawerPosition: 'right',
    // contentOptions: {
    //   labelStyle: {
    //     color: '#75A93B',
    //     fontFamily: 'Oswald-SemiBold',
    //   },
    // }
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
