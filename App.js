import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import Route from './src/routes/route'

export default function App(){
  return (
    <NavigationContainer>
      <Route/>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
