import React from "react";
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";
import { styles } from "./styles";

const FooterLoadingIndicator = ({ ...props }: ActivityIndicatorProps) => (
    <View style={styles.container}>
        <ActivityIndicator {...props} />
    </View>
)

export default FooterLoadingIndicator;