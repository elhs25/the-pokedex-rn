import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigationScreens from 'screens/main/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LangProvider } from 'utils/internationalization/provider/LangProvider';
import PokedexNavigationScreens from 'screens/pokedex/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MAIN_SCREENS } from 'screens/main/navigation/constants';
import { POKEDEX_SCREENS } from 'screens/pokedex/navigation/constants';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <LangProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name={MAIN_SCREENS.STACK} component={MainNavigationScreens} />
                        <Stack.Screen name={POKEDEX_SCREENS.STACK} component={PokedexNavigationScreens} />
                    </Stack.Navigator>
                </NavigationContainer>
            </LangProvider>
        </SafeAreaProvider>
    );
}