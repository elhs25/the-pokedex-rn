import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { ScreenContainer } from "components/screen";
import { useNavigation } from "@react-navigation/native";
import { LangContext } from "utils/internationalization/provider/LangProvider";
import { MainHeader } from "components/header";
import { BaseCreature, listCreatures } from "api/Pokemon";

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
            <Text>{Translate("SearchGenerationTitle", { generation })}</Text>
        </ScreenContainer>
    )
}

export default SearchScreen;