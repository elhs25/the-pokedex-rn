import { StyleSheet } from "react-native";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    floatingActionButtonContainer: {
        position: 'absolute',
        padding: MEASURES.medium,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: 0,
        right: 0,
    },
    contentContainer: {
        width: '100%',
    },
    featuredPokemonTitle: {
        fontSize: MEASURES.large,
    },
    featuredPokemonName: {
        fontStyle: 'italic',
        textTransform: 'capitalize',
        marginBottom: MEASURES.small,
    },
    elementContainer: {
        width: '100%',
        paddingVertical: MEASURES.medium,
        alignItems: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: MEASURES.small,
    }
})