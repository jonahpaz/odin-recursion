import * as module from '../exercises/merge-sort'

describe('Ramify', () => {
    test('Input [3, 6, 9, 15, 20]', () => {
        const input = [3, 6, 9, 15, 20];
        const actual = module.ramify(input);
        const expected = [[[3], [6]], [[9], [[15], [20]]]];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('Ramify ordered [1, 2, 3, 4, 5]', () => {
        const input = [1, 2, 3, 4, 5];
        const actual = module.ramify(input);
        const expected = [[[1], [2]], [[3], [[4], [5]]]];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
});
describe('Merge', () => {
    test('Merge example 1', () => {
        const input = [[3, 6, 9, 15], [2, 4, 7, 10]];
        const actual = module.merge(...input);
        const expected = [2, 3, 4, 6, 7, 9, 10, 15];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('Merge example 2', () => {
        const input = [[3], [4, 5]];
        const actual = module.merge(...input);
        const expected = [3, 4, 5];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });

    test('Merge branches function', () => {
        const input = [[3],[[4],[5]]];
        const actual = module.mergeBranches(input);
        const expected = [3, 4, 5];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
});
describe('Merge Sort', () => {
    test('Base case: Empty array []', () => {
        const input = [];
        const actual = module.mergeSort(input);
        const expected = [];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('Base case: non-empty array [73]', () => {
        const input = [73];
        const actual = module.mergeSort(input);
        const expected = [73];
        expect(expected).toEqual(actual);
    });
    test('Input already ordered [1, 2, 3, 4, 5]', () => {
        const input = [1, 2, 3, 4, 5];
        const actual = module.mergeSort(input);
        const expected = [1, 2, 3, 4, 5];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    
    test('Real case 1', () => {
        const input = [3, 2, 1, 13, 8, 5, 0, 1];
        const actual = module.mergeSort(input);
        const expected = [0, 1, 1, 2, 3, 5, 8, 13];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
    test('Real case 2', () => {
        const input = [105, 79, 100, 110];
        const actual = module.mergeSort(input);
        const expected = [79, 100, 105, 110];
        // console.log('expected', expected);
        // console.log('actual', actual);
        expect(expected).toEqual(actual);
    });
});