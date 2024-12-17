import React, {
  PropsWithChildren,
} from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}>;
export const GradientButton: React.FC<ButtonProps> = ({ children, style, onPress }) => {
  return (
    <View style={style}>
      <Pressable
        style={styles.button}
        onPress={onPress}>
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
    boxShadow: `
      0 1px 2px 0 rgba(12, 43, 100, 0.32),
      0 6px 16px 0 rgba(12, 43, 100, 0.32)
    `,
  },
  buttonTitle: {
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
