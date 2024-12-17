import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}>;

export const GlaringSegment: React.FC<Props> = ({
  children,
  style,
  contentStyle,
}) => {
  return (
    <View style={[styles.segmentContainer, style]}>
      <View style={[styles.segment, contentStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  segmentContainer: {},
  segment: {
    zIndex: 1,
    paddingHorizontal: 12,
    paddingVertical: 36,
    borderWidth: 6,
    borderColor: '#282828',
    borderRadius: 10,
    backgroundColor: '#303030',
    boxShadow: '0 0 0 1 rgba(255, 255, 255, 0.2)',
  },
});
