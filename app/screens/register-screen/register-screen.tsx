import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProp } from "react-navigation"

export interface RegisterScreenProps extends NavigationScreenProp<{}> {
  
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="registerScreen.header" />
    </Screen>
  )
})
