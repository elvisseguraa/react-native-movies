import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ( { children }: Props ) => {

  const { colors, prevColors, setPrevMainColors } = useContext( GradientContext );

  const { opacityRef, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn( () => {
      setPrevMainColors( colors );
      fadeOut( 1000 );
    });
  }, [ colors ])
  

  return (
    <View style={{ flex: 1, backgroundColor: '#084F6A' }}>
      
      <LinearGradient 
          // colors={[ '#084F6A', '#75CEDB', 'white' ]}
          // colors={[ colors.primary, colors.secondary, 'white' ]}
          colors={[ prevColors.primary, prevColors.secondary, 'white' ]}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View
        style={{ 
          ...StyleSheet.absoluteFillObject,
          opacity: opacityRef,
        }}
      >
        <LinearGradient 
            // colors={[ '#084F6A', '#75CEDB', 'white' ]}
            colors={[ colors.primary, colors.secondary, 'white' ]}
            style={{ ...StyleSheet.absoluteFillObject }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>

      { children }
    </View>
  )
}
