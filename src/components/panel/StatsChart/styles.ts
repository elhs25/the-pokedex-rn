import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { MEASURES } from "utils/constants/measures";

export const styles = StyleSheet.create({
    container: {
        borderRadius: MEASURES.xxsmall,
        backgroundColor: COLORS.gray[90],
        padding: MEASURES.small,
        width: '100%',
    },
    title: {
        fontSize: MEASURES.large,
        fontWeight: 'bold',
        marginBottom: MEASURES.xxsmall,
    },
    statBarContainer: {
        position: 'relative',
        paddingVertical: MEASURES.small,
        paddingHorizontal: MEASURES.xsmall,
        marginTop: MEASURES.xsmall,
    },
    statBar: {
        position: 'absolute',
        height: MEASURES.large,
        backgroundColor: COLORS.primary,
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
        paddingHorizontal: MEASURES.xsmall,
    },
    textLabel: {
        fontSize: MEASURES.medium,
        fontWeight: 'bold'
    },
});