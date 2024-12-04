// app/_layout.tsx
import { Stack } from 'expo-router';
import { TransportProvider } from '../context/TransportContext';

export default function Layout() {
  return (
    <TransportProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="main" 
          options={{ 
            title: 'Transport Map',
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="booking" 
          options={{ 
            title: 'Book Journey',
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="events" 
          options={{ 
            title: 'Nearby Events',
            headerShown: true 
          }} 
        />
      </Stack>
    </TransportProvider>
  );
}