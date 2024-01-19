import { BaseCreature } from "api/Pokemon";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface HorizontalPokemonCardProps extends BaseCreature{
    onPress: () => void
}

const HorizontalPokemonCard = ({ name, id, sprite, onPress }: HorizontalPokemonCardProps) => {
    return (
        <>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: sprite }}
                    resizeMode='contain' 
                />
            </View>
            <View>
                <Text style={[styles.label, styles.labelName]}>{name}</Text>
                <Text style={styles.label}>{`#${id}`}</Text>
            </View>
        </TouchableOpacity>
        </>
    )

}

export default HorizontalPokemonCard;