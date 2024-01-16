import React from "react";
import { View, Text } from 'react-native';
import { styles } from "./styles";

interface MainHeaderProps {
    title?: string;
}

const MainHeader = ({ title }: MainHeaderProps) => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default MainHeader;