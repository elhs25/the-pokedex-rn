import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingVertical: MEASURES.small,
        paddingHorizontal: MEASURES.medium,
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        fontSize: MEASURES.large,
        color: COLORS.white[100],
    },
    backButton: {
        marginRight: MEASURES.small,
    },
    backButtonText: {
        fontSize: MEASURES.large,
        color: COLORS.white[100]
    },
});