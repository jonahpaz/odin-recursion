import { mergeSort, merge, ramify, mergeBranches } from '../exercises/merge-sort'

describe('mergeSort', () => {
    test('ramify', () => {
        const input = [3, 6, 9, 15, 20];
        const actual = ramify(input);
        const expected = [[[3], [6]], [[9], [[15], [20]]]];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('ramify ordered', () => {
        const input = [1, 2, 3, 4, 5];
        const actual = ramify(input);
        const expected = [[[1], [2]], [[3], [[4], [5]]]];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });

    test('merge', () => {
        const input = [[3, 6, 9, 15], [2, 4, 7, 10]];
        const actual = merge(...input);
        const expected = [2, 3, 4, 6, 7, 9, 10, 15];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('merge', () => {
        const input = [[3], [4, 5]];
        const actual = merge(...input);
        const expected = [3, 4, 5];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });

    test('merge branches', () => {
        const input = [[3],[[4],[5]]];
        const actual = mergeBranches(input);
        const expected = [3, 4, 5];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });

    test('input base empty', () => {
        const input = [];
        const actual = mergeSort(input);
        const expected = [];
        expect(expected).toEqual(actual);
    });
    test('input base non empty', () => {
        const input = [73];
        const actual = mergeSort(input);
        const expected = [73];
        expect(expected).toEqual(actual);
    });
    test('input already ordered', () => {
        const input = [1, 2, 3, 4, 5];
        const actual = mergeSort(input);
        const expected = [1, 2, 3, 4, 5];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    
    
    test('input real deal 1', () => {
        const input = [3, 2, 1, 13, 8, 5, 0, 1];
        const actual = mergeSort(input);
        const expected = [0, 1, 1, 2, 3, 5, 8, 13];
        console.log('expected', expected);
        console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('input real deal 2', () => {
        const input = [105, 79, 100, 110];
        const actual = mergeSort(input);
        const expected = [79, 100, 105, 110];
        expect(expected).toEqual(actual);
    });
});