import { StyleSheet } from "react-native";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    description: {
        fontSize: MEASURES.large,
        marginBottom: MEASURES.medium,
    },
    listContainer: {
        width: '100%',
    },
    itemContainer: {
        paddingBottom: MEASURES.medium,
        paddingHorizontal: MEASURES.xxsmall,
    },
});