import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { ScreenContainer, ScreenContent } from "components/screen";
import { useNavigation } from "@react-navigation/native";
import { LangContext } from "utils/internationalization/provider/LangProvider";
import { MainHeader } from "components/header";
import { BaseCreature, listCreatures } from "api/Pokemon";
import { HorizontalPokemonCard } from "components/cards";

const SearchScreen = () => {
    const { Translate } = useContext(LangContext);
    const navigation = useNavigation();

    const [generation, ] = useState(Math.floor(Math.random() * (9 - 1) + 1));
    const [pokemons, setPokemons] = useState<BaseCreature[] | null>();

    const listGenerationPokemons = async () => {
        const response = await listCreatures({  });
        if(response) {
            setPokemons(response);
        }
    }

    const handleGoBack = () => {
        navigation.goBack();
    }
    
    return (
        <ScreenContainer>
            <MainHeader backButtonShown onBackPressed={handleGoBack} title={Translate('title')} />
            <ScreenContent>
                <Text>{Translate("SearchGenerationTitle", { generation })}</Text>
                <HorizontalPokemonCard 
                    id={1}
                    name="bulbasaur"
                    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    onPress={() => {}}
                />
            </ScreenContent>
        </ScreenContainer>
    )
}

export default SearchScreen;