import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { Audio } from 'expo-audio';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Permissions from 'expo-permissions';
import Home from './screen/home';

type RootStackParamList = {
  Home: undefined;
};

const LandingPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const navigation = useNavigation();
  const [micPermission, setMicPermission] = useState(false);

  useEffect(() => {
    checkAndRequestPermissions();
  }, []);

  const checkAndRequestPermissions = async () => {
    try {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.AUDIO_RECORDING
      );
      
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        finalStatus = status;
      }
      
      setMicPermission(finalStatus === 'granted');
    } catch (error) {
      console.warn('Error requesting microphone permission:', error);
    }
  };

  const handleScreenPress = () => {
    navigation.replace('screen/home');
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handleScreenPress}
      activeOpacity={1}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            {/* You can add your mic icon here */}
          </View>
        </View>
        
        <Text style={styles.title}>Finsee</Text>
        
        <View style={styles.permissionContainer}>
          <Text style={styles.privacyText}>
            Use Headphones for Privacy.
          </Text>
          <Text style={styles.micStatus}>
            {micPermission ? 'Microphone active' : 'Microphone inactive'}
          </Text>
          <Text style={styles.tapText}>
            Tap anywhere to start
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    color: '#8B5CF6',
    fontWeight: '600',
    marginBottom: 30,
  },
  permissionContainer: {
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 10,
  },
  micStatus: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
  },
  tapText: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default LandingPage;