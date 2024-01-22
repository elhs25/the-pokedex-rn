import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MainHeader } from "components/header";
import { ScreenContainer, ScreenContent } from "components/screen";
import { LangContext } from "utils/internationalization/provider/LangProvider";
import { Creature, getCreature } from "api/Pokemon";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { PokemonCardPicture } from "components/cards";
import { PokemonTypeChip } from "components/chip";
import { StatsChart } from "components/panel";
import { FormatCountNumber } from "utils/helpers/format";

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

    return (
        <ScreenContainer>
            <MainHeader backButtonShown onBackPressed={handleGoBack} title={Translate('title')} />
            <ScreenContent>   
                {
                    pokemon &&    
                    <ScrollView style={styles.contentContainer}>
                        <View style={styles.pokemonContainer}>
                            <View style={styles.pokemonPictureContainer}>
                                <PokemonCardPicture imageUri={pokemon.sprite} />     
                            </View>
                            <View style={styles.pokemonDescriptionContent}>
                                <View style={styles.pokemonDescriptionContent}>
                                    <Text style={styles.pokemonName}>{pokemon.name}</Text>
                                    <Text style={styles.pokemonNumber}>{`#${FormatCountNumber(pokemon.id)}`}</Text>
                                </View>    
                                <View style={styles.pokemonDescriptionContent}>
                                    <Text>{Translate("PokemonStatsHeight", { height: pokemon.height / 10 })}</Text>
                                    <Text>{Translate("PokemonStatsWeight", { weight: pokemon.weight / 10 })}</Text>
                                </View>
                                <PokemonTypeChip pokemonId={pokemon.id} pokemonTypes={pokemon.types} />
                            </View>    
                        </View>
                        <StatsChart title={Translate("PokemonStatsTitle")} pokemonId={pokemon.id} stats={pokemon.stats} />
                    </ScrollView>
                }
            </ScreenContent>
        </ScreenContainer>
    );
}

export default PokemonScreen;