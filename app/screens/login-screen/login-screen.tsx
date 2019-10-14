import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle } from "react-native"
import { Text } from "../../components/text"
import { Button } from "../../components/button"
import { Screen } from "../../components/screen"
import { Header } from "../../components/header"
import { save } from "../../utils/storage"

// import { useStores } from "../../models/root-store"
import { color, spacing } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"

export interface LoginScreenProps extends NavigationStackScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}

const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}

const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

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


export const LoginScreen: React.FunctionComponent<LoginScreenProps> = observer((props) => {
  // const { someStore } = useStores()

  const registrationScreen = React.useMemo(() => () => props.navigation.navigate("register"), [
    props.navigation,
  ])

  const goDashboard = React.useMemo(() => () => props.navigation.navigate("appDrawer"), [
    props.navigation,
  ])

  const authUser = React.useMemo(
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

      await save("Auth-Token", "TYGTR67673637")
      goDashboard();
    },
    [],
  )

  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
      <Text preset="header" tx="loginScreen.header" />

      <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="loginScreen.login"
            onPress={authUser}
          />

<Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="loginScreen.register"
            onPress={registrationScreen}
          />


    </Screen>
  )
})
