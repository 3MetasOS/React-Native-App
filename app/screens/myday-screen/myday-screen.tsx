import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProp } from "react-navigation"

export interface MydayScreenProps extends NavigationScreenProp<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const MydayScreen: React.FunctionComponent<MydayScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="mydayScreen.header" />
    </Screen>
  )
})
