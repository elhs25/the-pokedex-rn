import React from 'react';
import { Image, ImageResizeMode, View } from 'react-native';
import { styles } from './styles';

interface PokemonCardPictureProps {
    imageUri: string
    resizeMode?: ImageResizeMode
}

const PokemonCardPicture = ({ imageUri, resizeMode = 'contain' }: PokemonCardPictureProps) => {

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUri }} style={styles.cardImage} resizeMode={resizeMode} />
        </View>
    )
}

export default PokemonCardPicture;