import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        paddingVertical: MEASURES.small,
        paddingHorizontal: MEASURES.medium,
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        fontSize: MEASURES.large,
        color: COLORS.white[100],
    }
});