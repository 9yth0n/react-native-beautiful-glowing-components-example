import React, { PropsWithChildren, useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { InnerReflextionEffect } from './InnerReflectionEffect';
import { OuterGlowEffect } from './OuterGlowEffect';

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}>;

// Keep as named export instead of default export
export const OriginalGlowingButton: React.FC<ButtonProps> = ({ children, style, onPress }) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [buttonWidth, setButtonWidth] = useState<number>(100);
  const [buttonHeight, setButtonHeight] = useState<number>(100);

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

  const handleHoverIn = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <View style={[style, styles.container]}>
      <Pressable
        style={styles.button}
        onLayout={handleLayout}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}>
        <OuterGlowEffect
          width={buttonWidth}
          height={buttonHeight}
          opacity={0.8}
        />
        <InnerReflextionEffect
          width={buttonWidth}
          height={buttonHeight}
          opacity={(pressed || isHovered) ? 0.5 : 0}
        />
        <Text style={[styles.buttonTitle]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    position: 'relative',
    overflow: 'hidden',
    height: 44,
    padding: 0,
    backgroundColor: '#303030',
    borderRadius: 8,
    boxShadow: `
      0 0 0 1px #303030,
      0 1px 2px 0 rgba(0, 0, 0, 0.32),
      0 6px 16px 0 rgba(0, 0, 0, 0.32)
    `,
  },
  buttonTitle: {
    zIndex: 3,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
    textShadowRadius: 1,
    textShadowOffset: { width: 0, height: -1 },
    textShadowColor: 'hsla(0, 0%, 0%, 0.1)',
  },
  buttonSvg: {
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: '#303030',
    borderRadius: 7,
    left: 1,
    top: 1,
    zIndex: 2,
  },
});