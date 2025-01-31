import React, {
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { Stack, styled, Text } from 'tamagui';
import { MotiView } from 'moti';  // Add this import

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}>;

const StyledPressable = styled(Pressable, {
  position: 'relative',
  overflow: 'hidden',
  height: 56,
  padding: 0,
  backgroundColor: '#4B5563',
  borderRadius: 12,
  shadowColor: '#1F2937',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.6,
  shadowRadius: 12,
  elevation: 8,
})

const StyledText = styled(Text, {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  margin: 8,
  zIndex: 1,  // Added to ensure text stays on top
})

export const GradientButton: React.FC<ButtonProps> = ({ children, style, onPress }) => {
  const [pressed, setPressed] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(100);
  const [buttonHeight, setButtonHeight] = useState(100);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setButtonWidth(width);
    setButtonHeight(height);
  };

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <Stack margin={10}>
      <MotiView
        animate={{
          shadowOpacity: [0.4, 0.6, 0.4],
          shadowRadius: [8, 12, 8],
        }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 2000,
        }}>
        <StyledPressable
          style={[style, styles.button]}
          onLayout={handleLayout}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}>
          <Svg
            style={[styles.buttonSvg, { width: buttonWidth - 2, height: buttonHeight - 2 }]}
            viewBox={`0 0 ${buttonWidth - 2} ${buttonHeight - 2}`}>
            <Defs>
              <LinearGradient id="buttonGrad" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0" stopColor="#9333EA" stopOpacity="1" />
                <Stop offset="0.5" stopColor="#10B981" stopOpacity="0.8" />
                <Stop offset="1" stopColor="#E5E7EB" stopOpacity="0.9" />
              </LinearGradient>
              <LinearGradient id="silverGrad" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0" stopColor="#F9FAFB" stopOpacity="0.9" />
                <Stop offset="0.5" stopColor="#E5E7EB" stopOpacity="0.6" />
                <Stop offset="1" stopColor="#9CA3AF" stopOpacity="0.8" />
              </LinearGradient>
              <LinearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
                <Stop offset="0.3" stopColor="#FFFFFF" stopOpacity="0.3" />
                <Stop offset="0.6" stopColor="rgba(255, 255, 255, 0.2)" stopOpacity="0.2" />
                <Stop offset="1" stopColor="rgba(31, 41, 55, 0.3)" stopOpacity="0.5" />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#buttonGrad)" />
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#silverGrad)" opacity={0.4} />
            {!pressed && (
              <>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#shineGrad)" />
                <Rect x="0" y="0" width="100%" height="2" fill="#FFFFFF" opacity="0.4" />
                <Rect x="0" y="100%" width="100%" height="1" fill="#000000" opacity="0.2" transform="translate(0, -1)" />
              </>
            )}
          </Svg>
          <StyledText>{children}</StyledText>
        </StyledPressable>
      </MotiView>
    </Stack>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: '#1F2937',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonSvg: {
    overflow: 'hidden',
    position: 'absolute',
    borderRadius: 11,
    left: 1,
    top: 1,
  }
});
