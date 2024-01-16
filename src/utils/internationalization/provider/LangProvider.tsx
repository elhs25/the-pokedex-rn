import { createContext, } from "react";
import { useTranslation } from "react-i18next";
import i18n from "utils/internationalization/i18n";

interface LangProviderProps {
    children: React.ReactNode
}

interface LangContextProps {
    changeLanguage: (lng: string) => void
    Translate: (lng: string) => string
}

export const LangContext = createContext<LangContextProps>({ Translate: () => "", changeLanguage: () => {} });

export const LangProvider = ({ children }: LangProviderProps) => {
    const {t: Translate} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <LangContext.Provider value={{ changeLanguage, Translate }}>
            {children}
        </LangContext.Provider>
    )
}