const {solution} = require('../duplicateNum'); // 假设 solution 函数位于一个名为 solution.js 的文件中

describe('solution function', () => {
    it('should return an array of duplicate numbers', () => {
        const result = solution([1, 2, 2, 3, 1]);
        expect(result.sort()).toEqual([1, 2]);
    });

    it('should handle duplicates mixed with non-duplicates', () => {
        const result = solution([1, 1, 1, 1, 2, 3, 3]);
        expect(result.sort()).toEqual([1, 3]);
    });

    it('should return an empty array for an input with no duplicates', () => {
        const result = solution([1, 2, 3, 4, 5]);
        expect(result.sort()).toEqual([]);
    });

    it('should handle negative numbers as duplicates', () => {
        const result = solution([-1, 2, -1, 3, 4, -2, 4]);
        expect(result.sort()).toEqual([-1, 4]);
    });

    it('should return an empty array for an empty input array', () => {
        const result = solution([]);
        expect(result).toEqual([]);
    });
});