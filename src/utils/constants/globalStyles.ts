import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const GLOBAL_STYLES = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.gray[100],
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    }
});