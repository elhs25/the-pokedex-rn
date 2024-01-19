import React from 'react';
import { Image, ImageResizeMode, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface PokemonCardPictureProps {
    imageUri: string;
    resizeMode?: ImageResizeMode;
    onPress?: () => void;
}

const PokemonCardPicture = ({ imageUri, resizeMode = 'contain', onPress }: PokemonCardPictureProps) => {

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image source={{ uri: imageUri }} style={styles.cardImage} resizeMode={resizeMode} />
        </TouchableOpacity>
    )
}

export default PokemonCardPicture;