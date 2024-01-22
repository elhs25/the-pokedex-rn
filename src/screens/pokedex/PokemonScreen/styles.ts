import { StyleSheet } from "react-native";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
    },
    pokemonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: MEASURES.medium,
    },
    pokemonPictureContainer: {
        marginRight: MEASURES.small,
    },
    pokemonDescriptionContent: {
        marginBottom: MEASURES.small,
    },
    pokemonName: {
        textTransform: 'capitalize',
        fontSize: MEASURES.large,
        fontWeight: 'bold',
    },
    pokemonNumber: {
        fontStyle: 'italic',
    },
});