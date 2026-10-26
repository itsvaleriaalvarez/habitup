import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="routines"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}