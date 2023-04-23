import {reverseString} from './reverseString';

describe("test string reversing",
     () => {
        it('Reverse string "cat" to "tac" via javascript code', () => {
            const result = reverseString("cat");
            expect(result).toBe("tac");
        }),
        it('Reverse string "рот" to "тор" via javascript code', () => {
            const result = reverseString("рот");
            expect(result).toBe("тор");
        })
     })