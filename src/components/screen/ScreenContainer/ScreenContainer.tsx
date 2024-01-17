import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

type ScreenContainerProps = {
    children: React.ReactNode
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            styles.container, 
            { 
                paddingTop: insets.top, 
                paddingBottom: insets.bottom, 
                paddingLeft: insets.left,
                paddingRight: insets.right
            }
        ]}>
            {children}
        </View>
    )
}

export const ScreenContent = ({ children }: ScreenContainerProps) => (
    <View style={styles.content}>
        {children}
    </View>
)

export default ScreenContainer;