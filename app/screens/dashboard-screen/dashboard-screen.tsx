import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle } from "react-native"
import { Text } from "../../components/text"
import { Button } from "../../components/button"
import { Screen } from "../../components/screen"
import { Header } from "../../components/header"
// import { useStores } from "../../models/root-store"
import { color, spacing } from "../../theme"
import { NavigationDrawerScreenProps } from "react-navigation-drawer"

import { Api } from "../../services/api"
import { save } from "../../utils/storage"

export interface DashboardScreenProps extends NavigationDrawerScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}

const BOLD: TextStyle = { fontWeight: "bold" }

const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#5D2555",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}

const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

export const DashboardScreen: React.FunctionComponent<DashboardScreenProps> = observer((props) => {
  // const { someStore } = useStores()

  const openDrawer = React.useMemo(() => () => props.navigation.openDrawer(), [
    props.navigation
  ])

  const goLogin = React.useMemo(() => () => props.navigation.navigate("login"), [
    props.navigation
  ])

  const demoReactotron = React.useMemo(
    () => async () => {
      // console.tron.log("Your Friendly tron log message")
      // console.tron.logImportant("I am important")
      // console.tron.display({
      //   name: "DISPLAY",
      //   value: {
      //     numbers: 1,
      //     strings: "strings",
      //     booleans: true,
      //     arrays: [1, 2, 3],
      //     objects: {
      //       deeper: {
      //         deeper: {
      //           yay: "👾",
      //         },
      //       },
      //     },
      //     functionNames: function hello() {},
      //   },
      //   preview: "More control with display()",
      //   important: true,
      //   image: {
      //     uri:
      //       "https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4",
      //   },
      // })
      // make an API call for the demo
      // Don't do API like this, use store's API
      // const demo = new Api()
      // demo.setup()
      // demo.getUser("1")
      // // Let's do some async storage stuff
      // await save("Cool Name", "Boaty McBoatface")

      goLogin();
    },
    [],
  )

  return (
    <Screen style={ROOT} preset="scroll" >
       <Header
          headerTx="dashboardScreen.header"
          rightIcon="back"
          onRightPress={openDrawer}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
      <Text preset="header" tx="dashboardScreen.header" />
      <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="dashboardScreen.openMenu"
            onPress={openDrawer}
          />          

      <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="dashboardScreen.logout"
            onPress={demoReactotron}
          />          
    </Screen>
  )
})
