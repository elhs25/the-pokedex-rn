import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigationScreens from 'screens/main/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LangProvider } from 'utils/internationalization/provider/LangProvider';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <LangProvider>
                    <MainNavigationScreens />
                </LangProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}