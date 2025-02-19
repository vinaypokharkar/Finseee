import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screen/home" options={{ headerShown: false }} />
      <Stack.Screen name="screen/scan-qr" options={{ title: 'Scan QR' }} />
      <Stack.Screen name="screen/pay-phone" options={{ title: 'Pay via Phone' }} />
      <Stack.Screen name="screen/pay-contacts" options={{ title: 'Pay Contacts' }} />
      <Stack.Screen name="screen/bank-transfer" options={{ title: 'Bank Transfer' }} />
      <Stack.Screen name="screen/check-balance" options={{ title: 'Check Balance' }} />
      <Stack.Screen name="screen/assistance" options={{ title: 'Assistance' }} />
      <Stack.Screen name="screen/profile" options={{ title: 'Profile' }} />
    </Stack>
  );
}
