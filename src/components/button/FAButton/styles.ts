import { StyleSheet } from "react-native";
import { MEASURES } from "utils/constants/measures";

const FABUTTON_SIZE = 50;

export const styles = StyleSheet.create({
    fabutton: {
        height: FABUTTON_SIZE,
        width: FABUTTON_SIZE,
        borderRadius: FABUTTON_SIZE / 2,
        padding: MEASURES.xsmall,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

