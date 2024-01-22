import {it, expect, describe} from '@jest/globals';

import i18n from 'utils/internationalization/i18n';

describe("Internationalization", () => {

    it("The default language should be es", () => {
        expect(i18n.language).toBe("es");
    });

    it("Change default language to en", () => {
        i18n.changeLanguage("en")
        expect(i18n.language).toBe("en");
    });

});