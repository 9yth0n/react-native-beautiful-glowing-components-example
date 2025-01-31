import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowDimensions();
  
  return (
    <View style={[styles.wrapper, { maxWidth: width > 768 ? '80%' : '100%' }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 'auto',
    padding: 20,
  },
});