import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

type ButtonProps = PropsWithChildren<{
  width: number;
  height: number;
  opacity?: number;
}>;

// Change the first component's name to RotatingGlare
export const RotatingGlare: React.FC<ButtonProps> = ({
  width,
  height,
  opacity,
}) => {
  const glareSize = width * 1.2;
  return (
    <MotiView
      style={[
        styles.positionAbsolute,
        styles.innerBorder,
        {
          top: (height - glareSize) / 2,
          left: (width - glareSize) / 2,
          width: glareSize,
          height: glareSize,
          opacity,
        },
      ]}
      from={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{
        loop: true,
        type: "timing",
        repeatReverse: false,
        duration: 10000,
        easing: Easing.linear,
      }}
    >
      <Svg
        style={[styles.positionAbsolute]}
        viewBox={`0 0 ${glareSize} ${glareSize}`}
      >
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop
              offset="0"
              stopColor="hsla(0, 100%, 100%, 1)"
              stopOpacity="1"
            />
            <Stop
              offset="0.49"
              stopColor="hsla(0, 100%, 100%, 1)"
              stopOpacity="0.2"
            />
            <Stop
              offset="0.5"
              stopColor="hsla(0, 100%, 100%, 1)"
              stopOpacity="1"
            />
            <Stop
              offset="1"
              stopColor="hsla(0, 100%, 100%, 1)"
              stopOpacity="0.0"
            />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </MotiView>
  );
};

type ReflectionProps = {
  pressed: boolean;
};

// Keep the second component as InnerReflextionEffect
export const InnerReflextionEffect: React.FC<ReflectionProps> = ({ pressed }) => (
  <Svg style={styles.reflection}>
    <Defs>
      <LinearGradient id="reflexGrad" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.4" />
        <Stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.1" />
        <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </LinearGradient>
    </Defs>
    {!pressed && <Rect x="0" y="0" width="100%" height="100%" fill="url(#reflexGrad)" />}
  </Svg>
);

const styles = StyleSheet.create({
  positionAbsolute: {
    position: "absolute",
  },
  innerBorder: {
    opacity: 0.5,
    zIndex: 1,
  },
  reflection: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    zIndex: 0,
  }
});
