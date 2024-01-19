import React, { useContext, useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ScreenContainer, ScreenContent } from "components/screen";
import { useNavigation } from "@react-navigation/native";
import { LangContext } from "utils/internationalization/provider/LangProvider";
import { MainHeader } from "components/header";
import { API_DEFAULT_OFFSET, BaseCreature, listCreatures } from "api/Pokemon";
import { HorizontalPokemonCard } from "components/cards";
import { styles } from "./styles";
import { FooterLoadingIndicator } from "components/loading";
import { POKEDEX_SCREENS } from "../navigation/constants";

const SearchScreen = () => {
    const { Translate } = useContext(LangContext);
    const navigation = useNavigation();
    const page = useRef(0);

    const [pokemons, setPokemons] = useState<BaseCreature[]>([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        listPokemons();
    }, []);

    const listPokemons = async () => {
        if(loading) return;
        
        setLoading(true);
        const response = await listCreatures({ offset: page.current });
        setLoading(false);
        setRefreshing(false);
        if(response !== null && response.length > 0) {
            setPokemons([...(page.current === 0 ? [] : pokemons), ...response]);
            page.current += API_DEFAULT_OFFSET;
        }
    }

    const handleRefresh = () => {
        setRefreshing(true);
        page.current = 0;
        listPokemons();
    }

    const handlePokemonPressed = (id: number) => {
        navigation.navigate(POKEDEX_SCREENS.STACK as never, {
            screen: POKEDEX_SCREENS.POKEMON_DETAILS,
            params: { id }
        } as never);
    }

    const handleGoBack = () => {
        navigation.goBack();
    }
    
    return (
        <ScreenContainer>
            <MainHeader backButtonShown onBackPressed={handleGoBack} title={Translate('title')} />
            <ScreenContent>
                <Text style={styles.description}>{Translate("SearchGenerationTitle")}</Text>
                <FlatList 
                    style={styles.listContainer}

                    data={pokemons}
                    keyExtractor={(item) => `pokemon_${item.id}`}
                    renderItem={({item}) => (
                        <View style={styles.itemContainer}>
                            <HorizontalPokemonCard 
                                id={item.id}
                                name={item.name}
                                sprite={item.sprite}
                                onPress={() => handlePokemonPressed(item.id)}
                            />
                        </View>
                    )}

                    onEndReachedThreshold={.9}
                    onEndReached={listPokemons}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    ListFooterComponent={loading ? <FooterLoadingIndicator size='large' /> : null}
                />
            </ScreenContent>
        </ScreenContainer>
    )
}

export default SearchScreen;