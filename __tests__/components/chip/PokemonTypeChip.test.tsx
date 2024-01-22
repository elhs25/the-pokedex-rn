import React from "react";
import { Text } from "react-native";

import {it, expect, describe, jest} from '@jest/globals';
import { PokemonTypeChip } from "components/chip";
import { LangContext } from "utils/internationalization/provider/LangProvider";

// Note: test renderer must be required after react-native.
import renderer, { ReactTestRendererTree } from 'react-test-renderer';

describe("The PokemonTypeChip", () => {

    it("renders a PokemonTypeChip", () => {
        const langContextMock = { Translate: jest.fn(), changeLanguage: jest.fn() }
        const pokemonTypesMock = [
            { slot: 1, type: { name: 'steel' } }
        ];
        let chipComponent = renderer.create(
            <LangContext.Provider value={langContextMock}>
                <PokemonTypeChip 
                    pokemonId={1} 
                    pokemonTypes={pokemonTypesMock}
                />
            </LangContext.Provider>
        );
        
        expect(chipComponent.root.props?.pokemonTypes?.length).toBe(1);
        expect(chipComponent.root?.findByType(Text)).toBeDefined();
    });

    it("renders a PokemonTypeChip with two types", () => {
        const langContextMock = { Translate: jest.fn(), changeLanguage: jest.fn() }
        const pokemonTypesMock = [
            { slot: 1, type: { name: 'dragon' } },
            { slot: 2, type: { name: 'water' } }
        ];
        let chipComponent = renderer.create(
            <LangContext.Provider value={langContextMock}>
                <PokemonTypeChip 
                    pokemonId={1000} 
                    pokemonTypes={pokemonTypesMock}
                />
            </LangContext.Provider>
        );
        
        expect(chipComponent.root.props?.pokemonTypes?.length).toBe(2);
    });

});