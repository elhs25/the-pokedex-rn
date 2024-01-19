import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MainHeader } from "components/header";
import { ScreenContainer, ScreenContent } from "components/screen";
import { LangContext } from "utils/internationalization/provider/LangProvider";
import { Creature, getCreature } from "api/Pokemon";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { PokemonCardPicture } from "components/cards";
import { PokemonTypeChip } from "components/chip";

const PokemonScreen = () => {
    const navigation = useNavigation();
    const { params }: any = useRoute();
    const { Translate } = useContext(LangContext);

    const [pokemon, setPokemon] = useState<Creature | null>()

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async () => {
        if(params?.id) {
            const data = await getCreature(params?.id);
            
            if(data) {
              setPokemon(data);
            }
        }
    }

    const handleGoBack = () => {
        navigation.goBack();
    }
console.log("pokemon", pokemon);

    return (
        <ScreenContainer>
            <MainHeader backButtonShown onBackPressed={handleGoBack} title={Translate('title')} />
            <ScreenContent>   
                {
                    pokemon &&    
                    <ScrollView style={styles.contentContainer}>
                        <View>
                            <PokemonCardPicture imageUri={pokemon.sprite} />     
                        </View>
                        <View>
                            <PokemonTypeChip pokemonId={pokemon.id} pokemonTypes={pokemon.types} />
                        </View>    
                    </ScrollView>
                }
            </ScreenContent>
        </ScreenContainer>
    );
}

export default PokemonScreen;