import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { MotiView } from 'moti';

type Props = TextInputProps;
export const FormInput: React.FC<Props> = inputProps => {
  return (
    <MotiView
      from={{
        borderColor: 'hsla(271, 91%, 65%, 0.6)',
      }}
      animate={{
        borderColor: 'hsla(199, 89%, 49%, 0.6)',
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 2000,
        repeatReverse: true,
      }}
      style={styles.container}>
      <TextInput
        placeholderTextColor="rgba(255,255,255,0.5)"
        selectionColor="hsla(271, 91%, 65%, 0.6)"
        {...inputProps}
        style={styles.input}
      />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'rgba(20,20,20,0.8)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    color: 'white',
    padding: 16,
    fontSize: 16,
    width: '100%',
    height: 56,
  },
});
