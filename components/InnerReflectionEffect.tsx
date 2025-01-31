import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { View } from 'react-native';
type ButtonProps = {
  width: number;
  height: number;
  opacity?: number;
};

export const InnerReflextionEffect: React.FC<ButtonProps> = ({
  width = 100,
  height = 56,
  opacity = 0,
}) => {
  return (
    <View style={[styles.container]}>
      <MotiView
        style={[
          styles.glow,
          {
            width,
            height,
            backgroundColor: '#303030', // Default dark color
          },
        ]}
        animate={{
          backgroundColor: opacity > 0 ? '#4F46E5' : '#303030', // Change to purple on interaction
          opacity: opacity > 0 ? 0.5 : 1,
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  glow: {
    position: 'absolute',
    borderRadius: 8,
  },
});