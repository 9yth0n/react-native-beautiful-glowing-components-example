import { FormInput } from '@/components/FormInput';
import { GlaringSegment } from '@/components/GlaringSegment';
import { GlowingButton } from '@/components/GlowingButton';
import { GradientButton } from '@/components/GradientButton';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { GeometricIcon } from '@/components/GeometricIcon';
import { Text, YStack, Stack, Card } from 'tamagui';
import { MotiView } from 'moti';
import { useState } from 'react';
import { OriginalGlowingButton } from '@/components/OriginalGlowingButton';
import { OriginalGradientButton } from '@/components/OriginalGradientButton';
import { PageWrapper } from '@/components/PageWrapper';

export default function MainScreen() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <PageWrapper>
        <Stack
          style={{
            flex: 1,
          }}>
          <Card
            elevate
            bordered
            animation="bouncy"
            size="$4"
            style={styles.card}>
            <MotiView
              style={styles.gradientContainer}>
              <YStack gap="$4" padding="$6" alignItems="center" flex={1}>
                <Stack width="100%" gap="$4" marginTop="$4">
                  <GeometricIcon />
                  <Text
                    color="white"
                    fontSize={28}
                    textAlign="center">
                    {isSignIn ? 'Welcome Back' : 'Create Account'}
                  </Text>

                  {!isSignIn && (
                    <FormInput 
                      style={styles.input}
                      placeholder="Full Name..."
                      autoCapitalize="words"
                    />
                  )}
                  <FormInput 
                    style={styles.input}
                    placeholder="Email Address..."
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                  <FormInput 
                    style={styles.input}
                    placeholder="Password..."
                    secureTextEntry
                  />

                  <Stack alignItems="center" gap="$4" marginTop="$4" justifyContent='center'>
                    <GlaringSegment style={[styles.segment, { position: 'absolute', zIndex: 0 }]} />
                    <Stack gap="$4" zIndex={1}>
                      <Stack width="$12" gap="$10" alignItems="center">
                        <OriginalGlowingButton style={styles.button} onPress={() => {}}>
                          {isSignIn ? 'Sign In' : 'Create Account'}
                        </OriginalGlowingButton>
                      
                        {/* Temporarily commented out
                        <GradientButton style={styles.button} onPress={() => setIsSignIn(!isSignIn)}>
                          {isSignIn ? 'Need an account?' : 'Already have an account?'}
                        </GradientButton>
                      
                        <GlowingButton style={styles.button} onPress={() => {}}>
                          {isSignIn ? 'Sign In' : 'Create Account'}
                        </GlowingButton>
                        */}
                      
                        <OriginalGradientButton style={styles.button} onPress={() => {}}>
                          X
                        </OriginalGradientButton>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </YStack>
            </MotiView>
          </Card>
        </Stack>
      </PageWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(20,20,20,0.85)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    transform: 'translateZ(0)',  // Force GPU acceleration
  },
  gradientContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: 'rgba(40,40,40,0.3)',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    willChange: 'transform',
  },
  button: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    width: '100%',
    maxWidth: 300,
  },
  segment: {
    width: '100%',
    maxWidth: 300,
    height: 200,
  },
});
