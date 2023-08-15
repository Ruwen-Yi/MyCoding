const {solution} = require('../returnFnFromArry'); // 假设 solution 函数位于一个名为 solution.js 的文件中

describe('solution function', () => {
    it('should return a function', () => {
        const result = solution(['apollo', 'bella', 'cinderella']);
        expect(typeof result).toBe('function');
    });

    it('should filter keys in the object based on the input array', () => {
        const resp = solution(['apollo', 'bella', 'cinderella']);
        const result = resp({'apple': 25, 'apollo': 45, 'cindy': 84});
        expect(result).toEqual({"apollo": 45});
    });

    it('should handle missing keys in the object', () => {
        const resp = solution(['apollo', 'bella', 'cinderella']);
        const result = resp({orange: 80, 'apollo': 95});
        expect(result).toEqual({'apollo': 95});
    });

    it('should handle missing keys in both input array and object', () => {
        const resp = solution(['apollo', 'bella', 'cinderella']);
        const result = resp({iron: 'man', billy: 'joel'});
        expect(result).toEqual({});
    });

    it('should handle an empty input array', () => {
        const resp = solution([]);
        const result = resp({apple: 25, 'apollo': 45, 'cindy': 84});
        expect(result).toEqual({});
    });
});