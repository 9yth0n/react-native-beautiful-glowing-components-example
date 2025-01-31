import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { Svg, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

type ButtonProps = {
  width?: number;
  height?: number;
  opacity?: number;
};

export const OuterGlowEffect = ({ width = 100, height = 56, opacity = 0.5 }: ButtonProps) => {
  const glareSize = width * 1.2;
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.glow}
        from={{ 
          opacity: 0.5,
          shadowColor: '#4F46E5',
          shadowOffset: { width: -15, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
        }}
        animate={{ 
          opacity: 0.7,
          shadowColor: '#4F46E5',
          shadowOffset: { width: 15, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
        }}
        transition={{ 
          type: 'timing', 
          duration: 3000, 
          loop: true,
          repeatReverse: true,
        }}
      >
        <Svg
          style={[styles.buttonSvg, { width: width - 2, height: height - 2 }]}
          viewBox={`0 0 ${width - 2} ${height - 2}`}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop
                offset="0"
                stopColor="hsla(0, 0%, 100%, 0.16)"
                stopOpacity="0.25"
              />
              <Stop
                offset="1"
                stopColor="hsla(0, 0%, 100%, 0)"
                stopOpacity="0.0"
              />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </MotiView>
      <MotiView
        style={[
          styles.innerBorder,
          {
            top: 0,
            left: 0,
            width: width,
            height: height,
            borderRadius: 8,
            overflow: 'hidden',
          },
        ]}>
        <MotiView
          style={[
            styles.bloom,
            {
              position: 'absolute',
              width: 4,
              height: 1,
              backgroundColor: 'rgba(255, 155, 225, 0.4)',
              transformOrigin: '2px 0.5px',
            },
          ]}
          from={{
            translateX: -2,
            translateY: 0,
            rotate: '0deg'
          }}
          animate={{
            translateX: [-2, width - 2, width - 2, -2, -2],
            translateY: [0, 0, height, height, 0],
            rotate: ['0deg', '0deg', '90deg', '180deg', '270deg']
          }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 4000,
            easing: Easing.linear,
          }}
        />
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,  // This controls the overall component layering
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    backgroundColor: '#1f2223',
    opacity: 0.7,
    borderColor: '#1a1920',
    borderWidth: 3,
    shadowColor: '#1f2223',  // This purple shadow might be causing the overlay
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 14,
  },
  innerBorder: {
    position: 'absolute',
    opacity: 0.95,
    shadowColor: '#1f2223',  // Changed from purple to match background
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 25,
    elevation: 8,
  },
  bloom: {
    position: 'absolute',
    borderRadius: 4,
    boxShadow: `
      0 0 10px 2px rgba(255, 255, 255, 0.95),
      0 0 20px 3px rgba(255, 255, 255, 0.85),
      0 0 40px 8px rgba(255, 255, 255, 0.6)
    `,
  },
  positionAbsolute: {
    position: 'absolute',
  },
});