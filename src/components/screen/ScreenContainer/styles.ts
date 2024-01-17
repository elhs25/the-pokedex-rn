import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white[100],
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: MEASURES.medium,
        paddingTop: MEASURES.small,
    }
});