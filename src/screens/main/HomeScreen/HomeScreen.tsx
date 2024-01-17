import React, { useEffect, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Creature, getCreature } from 'api/Pokemon';
import { ScreenContainer, ScreenContent } from 'components/screen';
import { MainHeader } from 'components/header';
import { LangContext } from 'utils/internationalization/provider/LangProvider';
import { PokemonCardPicture } from 'components/cards';

function HomeScreen() {
  const [featuredPokemon, setFeaturedPokemon] = useState<Creature | null>(null)
  const { Translate, changeLanguage } = useContext(LangContext);

  useEffect(() => {
    // getFeautedCreature();
  }, []);

  const getFeautedCreature = async () => {
    const pokemon = await getCreature(Math.floor(Math.random() * (1025 - 1) + 1));
    if(pokemon) {
      setFeaturedPokemon(pokemon);
    }
  }

  return (
    <ScreenContainer>
      <MainHeader title={Translate('title')} />
      <ScreenContent>
        {featuredPokemon && 
          <PokemonCardPicture imageUri={featuredPokemon.sprite} />}
        <Text>Home Screen 1</Text>
        <Button title='Continue' onPress={() => changeLanguage("es")} />
      </ScreenContent>
    </ScreenContainer>
  );
}

export default HomeScreen;