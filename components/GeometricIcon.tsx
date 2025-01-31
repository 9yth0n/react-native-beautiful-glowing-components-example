import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MotiView } from 'moti';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

export const GeometricIcon = () => {
  return (
    <MotiView 
      style={styles.container}
      from={{
        scale: 0.9,
        opacity: 0.6,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 2000,
        loop: true,
      }}>
      <Svg width={120} height={120} style={styles.glow}>
        <Defs>
          <RadialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="120" height="120" fill="url(#grad)" />
      </Svg>
      <View style={styles.icon} />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  glow: {
    position: 'absolute',
    transform: [{ scale: 2 }],
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    transform: [{ rotate: '45deg' }],
  },
});