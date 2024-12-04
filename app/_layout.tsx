// app/_layout.tsx
import { Stack } from 'expo-router';
import { TransportProvider } from '../context/TransportContext';

// You can define your route types here if needed
export type RootStackParamList = {
  main: undefined;
  booking: undefined;
  events: undefined;
};

export default function Layout() {
  return (
    <TransportProvider>
      <Stack>
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