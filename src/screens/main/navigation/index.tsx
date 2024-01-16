import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'screens/main/index';
import { MAIN_SCREENS } from './constants';

const Stack = createNativeStackNavigator();

export default function MainNavigationScreens() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false 
        }}>
            <Stack.Screen name={MAIN_SCREENS.HOME} component={HomeScreen} />
        </Stack.Navigator>
    )
}