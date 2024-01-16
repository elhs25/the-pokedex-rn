import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { getCreature } from 'api/Pokemon';
import { ScreenContainer } from 'components/screen';
import { MainHeader } from 'components/header';

function HomeScreen() {

  React.useEffect(() => {
    (async () => {
      // const pokemon = await getCreature(1);
    })()
    
  }, []);

  return (
    <ScreenContainer>
      <MainHeader title='' />
      <View>
        <Text>Home Screen 1</Text>
        <Button title='Continue' />
      </View>
    </ScreenContainer>
  );
}

export default HomeScreen;