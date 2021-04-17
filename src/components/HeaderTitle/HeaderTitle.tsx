import {StyleSheet} from 'react-native'
import * as React from 'react'
import {Text} from '@ui-kitten/components'
import {Metrics} from "@src/themes";

interface Props {
  title: string,
  description: string
}

export const HeaderTitle = (props: Props) => {
  return(
    <>
      <Text category={"h2"} style={styles.padding}>{props.title}</Text>
      <Text category={"h6"} style={styles.padding}>{props.description}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: Metrics.vertical._20,
    textAlign:'center'
  }
})
