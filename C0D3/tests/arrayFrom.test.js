const {create2dArray} = require('../arrayFrom');

describe('create2dArray', () => {
    test('creates a 2D array with 3 rows and 2 columns', () => {
      const result = create2dArray(3, 2);
      expect(result).toEqual([
        [{ x: 0, y: 0 }, { x: 1, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }],
      ]);
    });
  
    test('creates a 2D array with 2 rows and 3 columns', () => {
      const result = create2dArray(2, 3);
      expect(result).toEqual([
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      ]);
    });
  
    test('creates a 2D array with 0 rows and 0 columns', () => {
      const result = create2dArray(0, 0);
      expect(result).toEqual([]);
    });

    test('creates a 2D array with 1 row and 0 columns', () => {
        const result = create2dArray(1, 0);
        expect(result).toEqual([[]]);
      });
      
    test('creates a 2D array with 0 rows and 1 column', () => {
        const result = create2dArray(0, 1);
        expect(result).toEqual([]);
    });
  
});