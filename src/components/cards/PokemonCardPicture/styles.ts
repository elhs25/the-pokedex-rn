import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { MEASURES } from "utils/constants/measures";

const DEFAULT_SIZE = 150;

export const styles = StyleSheet.create({
    cardContainer: {
        width: DEFAULT_SIZE,
        height: DEFAULT_SIZE,
        backgroundColor: COLORS.gray[100],
        borderRadius: 10,
        padding: MEASURES.xsmall,
    },
    cardImage: {
        width: 'auto',
        height: '100%',
    }
});