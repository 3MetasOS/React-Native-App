import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { Header } from "../../components/header"
// import { useStores } from "../../models/root-store"
import { color,spacing } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"


export interface AboutusScreenProps extends NavigationStackScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const BOLD: TextStyle = { fontWeight: "bold" }

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

export const AboutusScreen: React.FunctionComponent<AboutusScreenProps> = observer((props) => {
  // const { someStore } = useStores()

  const openDrawer = React.useMemo(() => () => props.navigation.openDrawer(), [
    props.navigation
  ])

  
  return (
    <Screen style={ROOT} preset="scroll">
      <Header 
          headerTx="aboutusScreen.header"
          rightIcon="back"
          onRightPress={openDrawer}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
      <Text preset="header" tx="aboutusScreen.header" />
    </Screen>
  )
})
