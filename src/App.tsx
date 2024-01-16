import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigationScreens from 'screens/main/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigationScreens />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}