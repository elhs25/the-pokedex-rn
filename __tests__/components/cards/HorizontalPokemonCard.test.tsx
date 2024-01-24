import React from "react";

import {it, expect, describe} from '@jest/globals';
import renderer from 'react-test-renderer';
import { HorizontalPokemonCard } from "components/cards";

describe('HorizontalPokemonCard Component', () => {

    it('renders correctly', () => {
        const Component = renderer.create(
            <HorizontalPokemonCard  
                name="mudkip"
                id={258}
                sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
                onPress={() => {}}
            />
        ).toJSON();
        expect(Component).toMatchSnapshot();
    });
});