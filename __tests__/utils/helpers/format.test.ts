import { FormatCountNumber } from "utils/helpers/format";
import {it, expect, describe} from '@jest/globals';

describe('Format numbers', () => {
    it('Format number 1 as 0001', () => {
        expect(FormatCountNumber(1)).toBe("0001");
    });
    it('Format number 999 as 0999', () => {
        expect(FormatCountNumber(999)).toBe("0999");
    });
});