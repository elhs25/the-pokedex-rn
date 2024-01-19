import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { POKEDEX_SCREENS } from './constants';
import { SearchScreen, PokemonScreen } from "screens/pokedex/";


const Stack = createNativeStackNavigator();

export default function PokedexNavigationScreens() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false 
        }}>
            <Stack.Screen name={POKEDEX_SCREENS.SEARCH} component={SearchScreen} />
            <Stack.Screen name={POKEDEX_SCREENS.POKEMON_DETAILS} component={PokemonScreen} />
        </Stack.Navigator>
    )
}