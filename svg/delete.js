import React from "react";
import { Icon, MoonIcon, Stack, Center, NativeBaseProvider } from "native-base"
import { G, Path } from "react-native-svg"
export const Example = () => {
  return (
    <Stack
      direction={{
        base: "column",
        md: "row",
      }}
      space={8}
    >
      <Icon viewBox="0 0 870 873">
      <G fillRule="#000000" stroke="#000000" strokeWidth={1}  stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" fill="#000000">
          <Path d="M82 25.275L74.726 18.001 50 42.727 25.276 17.996 18.003 25.268 42.727 50 18 74.727 25.274 82.001 50 57.275 74.722 82.003 81.996 74.732 57.273 50.002z"/>
          <Path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M73.5 73.5L74.5 74.5M69.5 69.5L71.5 71.5M71.5 28.5L50 50 67.5 67.5M74.5 25.5L73.5 26.5M26.5 26.5L25.5 25.5M30.5 30.5L28.5 28.5M28.5 71.5L50 50 32.5 32.5M25.5 74.5L26.5 73.5"/>
        </G>
    </Icon>
    </Stack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}