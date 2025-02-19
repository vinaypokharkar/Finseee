// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ServiceButton = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.serviceButton} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#4285F4" />
    <Text style={styles.serviceText}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const router = useRouter();

  const services = [
    { icon: 'qr-code-outline', title: 'Scan QR code', route: '/screen/scan-qr' },
    { icon: 'phone-portrait-outline', title: 'Pay phone number', route: '/screen/pay-phone' },
    { icon: 'people-outline', title: 'Pay contacts', route: '/screen/pay-contacts' },
    { icon: 'business-outline', title: 'Bank transfer', route: '/screen/bank-transfer' },
    { icon: 'wallet-outline', title: 'Check Balance', route: '/screen/check-balance' },
    { icon: 'headset-outline', title: 'Assistance', route: '/screen/assistance' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity onPress={() => router.push('/screen/profile')}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Banking Services</Text>

      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceButton
            key={index}
            icon={service.icon}
            title={service.title}
            onPress={() => router.push(service.route)}
          />
        ))}
      </View>

      <View style={styles.assistantBar}>
        <View style={styles.assistantContent}>
          <Ionicons name="headset" size={24} color="white" />
          <View>
            <Text style={styles.assistantTitle}>FinSee</Text>
            <Text style={styles.assistantSubtitle}>Always active</Text>
          </View>
        </View>
        <Ionicons name="mic-outline" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    padding: 16,
  },
  servicesContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 16,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceButton: {
    width: '46%',
    backgroundColor: '#F8FAFC',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceText: {
    marginTop: 8,
    color: '#4B5563',
    textAlign: 'center',
  },
  assistantBar: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  assistantContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  assistantTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  assistantSubtitle: {
    color: 'white',
    opacity: 0.8,
  },
});

export default HomeScreen;