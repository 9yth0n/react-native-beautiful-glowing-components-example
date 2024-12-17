import { FormInput } from '@/components/FormInput';
import { GlaringSegment } from '@/components/GlaringSegment';
import { GlowingButton } from '@/components/GlowingButton';
import { GradientButton } from '@/components/GradientButton';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GlaringSegment style={styles.segment} >
        <Text style={styles.heading}>Hello</Text>
        <FormInput placeholder="Email address" />
        <FormInput placeholder="Password" secureTextEntry />
        <GlowingButton>Log in</GlowingButton>
        <Text style={styles.text}>Just getting started?</Text>
        <GradientButton style={styles.buttonSignUp}>Create an account</GradientButton>
      </GlaringSegment>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(221 20% 11%)',
    justifyContent: 'center'
  },
  heading: {
    opacity: 0.8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
  },
  segment: {
    margin: 24
  },
  buttonSignUp: {
    marginTop: 12,
  },
  text: {
    marginTop: 16,
    color: 'white',
    textAlign: 'center',
    opacity: 0.6,
  },
});
