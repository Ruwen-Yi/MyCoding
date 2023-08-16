const { solution } = require('../findTwoSum');
describe('solution function', () => {
    it('should return true if there are two numbers that add up to the target sum', () => {
        const result = solution([1, 2, 22, 333, 23], 25);
        expect(result).toBe(true);
    });

    it('should return true if there are two numbers that add up to the target sum', () => {
        const result = solution([1, 2, 22, 333, 23], 24);
        expect(result).toBe(true);
    });

    it('should return false if there are no two numbers that add up to the target sum', () => {
        const result = solution([1, 2, 22, 333, 23], 100);
        expect(result).toBe(false);
    });

    it('should handle negative numbers', () => {
        const result = solution([-1, 2, 3, 4, 5], 1);
        expect(result).toBe(true);
    });

    it('should handle an array with duplicate numbers', () => {
        const result = solution([1, 1, 1, 2, 2, 3, 3], 4);
        expect(result).toBe(true);
    });
});