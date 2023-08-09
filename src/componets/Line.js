import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = () => {
  return (
    <View style={styles.line}/>
     
  )
}

export default Line

const styles = StyleSheet.create({
    line:{
        width:"100%",
        borderWidth:0.3,
        borderColor:"#C8C8C8"
    }
})