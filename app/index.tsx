import { GlaringSegment } from '@/components/GlaringSegment';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GlaringSegment style={styles.segment} >
        <Text style={styles.heading}>Hello</Text>
      </GlaringSegment>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(221 20% 11%)',
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
  }
});
