const {customMap} = require('../mapObject');
Object.prototype.customMap = customMap;

describe('Custom map function for objects', () => {
    it('should apply the given function to each key-value pair and return a new array', () => {
      const info = {
        ironman: 'arrogant',
        spiderman: 'naive',
        hulk: 'strong',
      };
  
      const result = info.customMap((key, value, i) => {
        return key + i + value;
      });
  
      expect(result).toEqual(['ironman0arrogant', 'spiderman1naive', 'hulk2strong']);
    });
  
    it('should handle different callback that concatenates key and value', () => {
      const info = {
        ironman: 'arrogant',
        spiderman: 'naive',
        hulk: 'strong',
      };
  
      const result = info.customMap((key, value) => {
        return key + value;
      });
  
      expect(result).toEqual(['ironmanarrogant', 'spidermannaive', 'hulkstrong']);
    });
  
    it('should handle callback that returns a number', () => {
      const info = {
        ironman: 'arrogant',
        spiderman: 'naive',
        hulk: 'strong',
      };
  
      const result = info.customMap(() => 42);
  
      expect(result).toEqual([42, 42, 42]);
    });
  
    it('should handle callback that returns objects', () => {
      const info = {
        ironman: 'arrogant',
        spiderman: 'naive',
        hulk: 'strong',
      };
  
      const result = info.customMap(() => ({ status: 'hero' }));
  
      expect(result).toEqual([{ status: 'hero' }, { status: 'hero' }, { status: 'hero' }]);
    });
  
    it('should handle callback that uses index only', () => {
      const info = {
        ironman: 'arrogant',
        spiderman: 'naive',
        hulk: 'strong',
      };
  
      const result = info.customMap((_, __, i) => i);
  
      expect(result).toEqual([0, 1, 2]);
    });
  });
