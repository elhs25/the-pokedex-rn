import React, { useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { getCreature } from 'api/Pokemon';
import { ScreenContainer } from 'components/screen';
import { MainHeader } from 'components/header';
import { LangContext } from 'utils/internationalization/provider/LangProvider';

function HomeScreen() {
  const { Translate, changeLanguage } = useContext(LangContext);

  useEffect(() => {
    (async () => {
      // const pokemon = await getCreature(1);
    })()
    
  }, []);

  return (
    <ScreenContainer>
      <MainHeader title={Translate('title')} />
      <View>
        <Text>Home Screen 1</Text>
        <Button title='Continue' onPress={() => changeLanguage("es")} />
      </View>
    </ScreenContainer>
  );
}

export default HomeScreen;