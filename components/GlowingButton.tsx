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
// Fix the import name
import { InnerReflextionEffect, RotatingGlare } from './InnerReflextionEffect';  // Updated path to match file name
import { OuterGlowEffect } from './OuterGlowEffect';
import { Stack, styled, Text } from 'tamagui'
import { MotiView } from 'moti';

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}>;

const StyledPressable = styled(Pressable, {
  position: 'relative',
  overflow: 'hidden',
  height: 56,
  padding: 0,
  backgroundColor: '#4F46E5',  // Start with purple
  borderRadius: 12,
  shadowColor: '#4F46E5',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.7,
  shadowRadius: 20,
  elevation: 8,
})

const StyledText = styled(Text, {
  color: 'Silver',
  textAlign: 'center',
  fontWeight: 'regular',
  fontSize: 20,
  margin: 8,
  zIndex: 0,
})

export const GlowingButton: React.FC<ButtonProps> = ({ children, style, onPress }) => {
  const [pressed, setPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(100);
  const [buttonHeight, setButtonHeight] = useState(56);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setButtonWidth(width);
    setButtonHeight(height);
  };

  return (
    <MotiView
      from={{
        shadowColor: '#4F46E5',
        shadowOffset: { width: -15, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
      }}
      animate={{
        shadowColor: '#4F46E5',
        shadowOffset: { width: 15, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
      }}
      transition={{
        type: 'timing',
        duration: 3000,
        loop: true,
      }}
      style={{ margin: 10 }}>
      // ... then in the component:
            <StyledPressable
              style={[
                style,
                styles.button,
                {
                  backgroundColor: pressed ? '#303030' : '#4F46E5',
                  transition: 'background-color 150ms ease',
                }
              ]}
              onLayout={handleLayout}
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
              onPress={onPress}>
              <OuterGlowEffect width={buttonWidth} height={buttonHeight} />
              <StyledText>{children}</StyledText>
            </StyledPressable>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  }
});
