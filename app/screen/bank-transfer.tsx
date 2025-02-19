import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BankTransferScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bank Transfer Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#4285F4',
  },
});
