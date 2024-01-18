import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

interface MainHeaderProps {
    title?: string
    backButtonShown?: boolean 
    onBackPressed?: () => void
}

const MainHeader = ({ title, backButtonShown, onBackPressed }: MainHeaderProps) => {

    return (
        <View style={styles.headerContainer}>
            {backButtonShown &&
            <TouchableOpacity style={styles.backButton} onPress={onBackPressed}>
                <Text style={styles.backButtonText}>{`◀︎`}</Text>
            </TouchableOpacity>}
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default MainHeader;