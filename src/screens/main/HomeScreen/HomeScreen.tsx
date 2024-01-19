import React, { useEffect, useContext, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Creature, getCreature } from 'api/Pokemon';
import { ScreenContainer, ScreenContent } from 'components/screen';
import { MainHeader } from 'components/header';
import { LangContext } from 'utils/internationalization/provider/LangProvider';
import { PokemonCardPicture } from 'components/cards';
import { PokemonTypeChip } from 'components/chip';
import { StatsChart } from 'components/panel';
import { styles } from './styles';
import { FAButton } from 'components/button';
import { useNavigation } from '@react-navigation/native';
import { POKEDEX_SCREENS } from 'screens/pokedex/navigation/constants';
import { FormatCountNumber } from 'utils/helpers/format';

function HomeScreen() {
  const [featuredPokemon, setFeaturedPokemon] = useState<Creature | null>(null)
  const { Translate } = useContext(LangContext);
  const navigation = useNavigation();

  useEffect(() => {
    getFeautedCreature();
  }, []);

  const getFeautedCreature = async () => {
    const pokemon = await getCreature(Math.floor(Math.random() * (1025 - 1) + 1));
    if(pokemon) {
      setFeaturedPokemon(pokemon);
    }
  }

  const handleFAButtonPressed = () => {
    navigation.navigate(POKEDEX_SCREENS.STACK as never, {
      screen: POKEDEX_SCREENS.SEARCH,
    } as never);
  }

  return (
    <ScreenContainer>
      <MainHeader title={Translate('title')} />
      <ScreenContent>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.featuredPokemonTitle}>{`${Translate("HomeFeaturedPokemon")}:`}</Text>
          {featuredPokemon && 
            <View style={styles.elementContainer}>
              <View style={styles.itemContainer}>
                <PokemonCardPicture imageUri={featuredPokemon.sprite} />
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.featuredPokemonName}>{`#${FormatCountNumber(featuredPokemon.id)} ${featuredPokemon.name}`}</Text>
                <PokemonTypeChip pokemonId={featuredPokemon.id} pokemonTypes={featuredPokemon.types} />
              </View>
              <StatsChart title={Translate("HomeStatsTitle")} pokemonId={featuredPokemon.id} stats={featuredPokemon.stats} />
            </View>
          }
        </ScrollView>
      </ScreenContent>
      <View style={styles.floatingActionButtonContainer}>
        <FAButton onPress={handleFAButtonPressed}>
          <Text>{`📱`}</Text>
        </FAButton>
      </View>
    </ScreenContainer>
  );
}

export default HomeScreen;