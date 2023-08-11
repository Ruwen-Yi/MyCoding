const {solution} = require('../callBetwnObjs');

describe('solution function', () => {
    const originObj = {
        "name": "drake",
        "age": "33",
        "power": 'finessing',
        "color": "platinum"
    };

    const funcObj = {
        "name": (e) => { return e + "kendrick" },
        "power": (e) => { return "motivating" + e }
    };

    it('should return a new object with modified values', () => {
        const result = solution(originObj, funcObj);
        expect(result).toEqual({
            "name": "drakekendrick",
            "age": "33",
            "power": "motivatingfinessing",
            "color": "platinum"
        });
    });

    it('should not modify the original objects', () => {
        const result = solution(originObj, funcObj);
        expect(result).not.toBe(originObj); // Check if a new object is returned
        expect(result).not.toBe(funcObj); // Check if the original function object is not modified
    });

    it('should handle missing keys in originObj', () => {
        const modifiedOriginObj = { ...originObj };
        delete modifiedOriginObj['power'];
        
        const result = solution(modifiedOriginObj, funcObj);
        expect(result).toEqual({
            "name": "drakekendrick",
            "age": "33",
            "color": "platinum"
        });
    });

    it('should handle missing keys in funcObj', () => {
        const modifiedFuncObj = { ...funcObj };
        delete modifiedFuncObj['power'];

        const result = solution(originObj, modifiedFuncObj);
        expect(result).toEqual({
            "name": "drakekendrick",
            "age": "33",
            "power": "finessing",
            "color": "platinum"
        });
    });

    it('should handle missing keys in both originObj and funcObj', () => {
        const modifiedOriginObj = { ...originObj };
        delete modifiedOriginObj['power'];

        const modifiedFuncObj = { ...funcObj };
        delete modifiedFuncObj['name'];

        const result = solution(modifiedOriginObj, modifiedFuncObj);
        expect(result).toEqual({
            "name": "drake",
            "age": "33",
            "color": "platinum"
        });
    });
});