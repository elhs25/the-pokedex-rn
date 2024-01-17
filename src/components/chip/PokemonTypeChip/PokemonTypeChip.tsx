import {CreatureType} from 'api/Pokemon';
import React, {useCallback, useContext} from 'react';
import {Text, View} from 'react-native';
import {COLORS} from 'utils/constants/colors';
import {LangContext} from 'utils/internationalization/provider/LangProvider';
import {styles} from './styles';

interface PokemonTypeChipProps {
  pokemonId: number | string;
  pokemonTypes: CreatureType[];
}

const PokemonTypeChip = ({pokemonId, pokemonTypes}: PokemonTypeChipProps) => {
  const {Translate} = useContext(LangContext);

  const generateChips = useCallback(() => {
    return (
      <View style={styles.chipsWrapper}>
        {pokemonTypes.map((pkmType, index) =>
          (
            <View
                key={`${pokemonId}_${index}`}
                style={[
                    styles.chipContainer,
                    {
                        backgroundColor:
                            COLORS.CreatureTypes[pkmType.type.name as keyof typeof COLORS.CreatureTypes],
                    },
                    index < pokemonTypes.length - 1 ? styles.chipSeparator : null, 
                ]}>
                <Text style={styles.chipText}>{Translate(pkmType.type.name)}</Text>
            </View>
          ),
        )}
      </View>
    );
  }, [pokemonId, pokemonTypes]);

  return generateChips();
};

export default PokemonTypeChip;
