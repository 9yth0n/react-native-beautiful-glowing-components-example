// ... copy the gradient button code exactly as provided ...
import React, {
  PropsWithChildren,
  useState,
} from 'react';
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

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}>;

export const OriginalGradientButton: React.FC<ButtonProps> = ({ children, style, onPress }) => {
  const [pressed, setPressed] = useState<boolean>(false);
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

  return (
    <View style={style}>
      <Pressable
        style={styles.button}
        onLayout={handleLayout}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}>
        <Svg
          style={[styles.buttonSvg, { width: buttonWidth, height: buttonHeight }]}
          viewBox={`0 0 ${buttonWidth} ${buttonHeight}`}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop
                offset="0"
                stopColor="hsla(0, 0%, 100%, 0.16)"
                stopOpacity="0.16"
              />
              <Stop
                offset="1"
                stopColor="hsla(0, 0%, 100%, 0)"
                stopOpacity="0.0"
              />
            </LinearGradient>
          </Defs>
          {!pressed && (
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
          )}
        </Svg>
        <Text style={[styles.buttonTitle]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    overflow: 'hidden',
    margin: 10,
    padding: 0,
    backgroundColor: '#3d7aed',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'hsla(0, 0%, 100%, 0.3)',
  },
  buttonSvg: {
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: '#3d7aed',
    borderRadius: 7,
    left: 0,
    top: 0,
    zIndex: 2,
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
});