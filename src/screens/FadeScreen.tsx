import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Button, Animated } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

   const { opacityRef, fadeIn, fadeOut } = useFade();

  return (
    <View style={{ 
        flex: 1, 
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Animated.View style={{ 
            backgroundColor: '#084F6A',
            width: 150, 
            height: 150, 
            borderColor: 'white',
            borderWidth: 10,
            marginBottom: 10,
            opacity: opacityRef
        }} />

        <Button title="FadeIn" onPress={ () => fadeIn() } />
        <Button title="FadeOut" onPress={ () => fadeOut() } />

    </View>
  )
}

const styles = StyleSheet.create({
    
});