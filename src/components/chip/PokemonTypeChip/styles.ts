import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    chipsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chipContainer: {
        width: 80,
        paddingVertical: MEASURES.small,
        paddingHorizontal: MEASURES.xsmall,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chipSeparator: {
        marginRight: MEASURES.xxsmall
    },
    chipText: {
        fontSize: MEASURES.small,
        color: COLORS.black[100]
    }
});