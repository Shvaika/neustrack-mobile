import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="recommendation" options={{ title: "Recommendations" }} />
    </Stack>
  );
}

export default HomeLayout