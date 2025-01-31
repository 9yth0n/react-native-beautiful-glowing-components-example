import React, { useState } from 'react';
import { ScrollView, RefreshControl, StyleSheet, View, Text } from 'react-native';
import { GlowingButton } from './components/GlowingButton';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    console.log('Starting refresh');
    setRefreshing(true);
    setTimeout(() => {
      console.log('Refresh complete');
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      style={[styles.container, { height: '100%' }]}
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={true}
      bounces={true}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#fff"
          colors={['#4F46E5']}
          progressViewOffset={20}
          progressBackgroundColor="#000"
        />
      }
    >
      {[...Array(20)].map((_, i) => (
        <View key={i} style={styles.buttonContainer}>
          <GlowingButton onPress={() => console.log('pressed', i)}>
            Button {i + 1}
          </GlowingButton>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      height: '100%',
    },
    contentContainer: {
      paddingTop: 60,
      paddingBottom: 120,
      alignItems: 'center',
    },
    buttonContainer: {
      width: '80%',
      maxWidth: 300,
      marginVertical: 15,
  },
  text: {
    color: '#fff',
    marginTop: 10,
    opacity: 0.7,
  },
});