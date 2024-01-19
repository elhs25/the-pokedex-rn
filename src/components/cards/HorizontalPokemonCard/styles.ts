import { StyleSheet } from "react-native";
import { COLORS } from "utils/constants/colors";
import { GLOBAL_STYLES } from "utils/constants/globalStyles";
import { MEASURES } from "utils/constants/measures";

const IMAGE_SIZE = 70;

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: MEASURES.medium,
        paddingVertical: MEASURES.small,
        backgroundColor: COLORS.gray[90],
        borderRadius: MEASURES.small,
        ...GLOBAL_STYLES.shadow,
    },
    imageContainer: {
        height: IMAGE_SIZE,
        width: IMAGE_SIZE,
        borderRadius: MEASURES.xsmall,
        padding: MEASURES.xxsmall,
        marginRight: MEASURES.small,
    },
    image: {
        height: "100%",
        width: 'auto',
    },
    label: {
        textTransform: 'capitalize',
        fontSize: MEASURES.large,
        color: COLORS.gray[100],
    },
    labelName: {
        fontWeight: 'bold',
        marginBottom: MEASURES.xsmall,
    }
});