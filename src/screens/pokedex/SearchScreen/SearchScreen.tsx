import React, { useContext } from "react";
import { Text } from "react-native";
import { ScreenContainer } from "components/screen";
import { useNavigation } from "@react-navigation/native";
import { LangContext } from "utils/internationalization/provider/LangProvider";
import { MainHeader } from "components/header";

const SearchScreen = () => {
    const { Translate } = useContext(LangContext);
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }
    
    return (
        <ScreenContainer>
            <MainHeader backButtonShown onBackPressed={handleGoBack} title={Translate('title')} />
        </ScreenContainer>
    )
}

export default SearchScreen;