import { fibs, fibsRec } from "../exercises/fibonacci";

describe('fibs', () => {
    test('input 2', () => {
        const input = 2;
        const actual = fibs(input);
        const expected = [0, 1];
        expect(expected).toEqual(actual);
    });
    test('input 8', () => {
        const input = 8;
        const actual = fibs(input);
        const expected = [0, 1, 1, 2, 3, 5, 8, 13];
        expect(expected).toEqual(actual);
    });
});
describe('fibsRec', () => {
    test('input 2', () => {
        const input = 2;
        const actual = fibsRec(input);
        const expected = [0, 1];
        expect(expected).toEqual(actual);
    });
    test('input 8', () => {
        const input = 8;
        const actual = fibsRec(input);
        const expected = [0, 1, 1, 2, 3, 5, 8, 13];
        expect(expected).toEqual(actual);
    });
});