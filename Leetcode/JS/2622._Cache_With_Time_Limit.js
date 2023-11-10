
var TimeLimitedCache = function() {
    this.keyMap = new Map();
    this.expiredKey = new Set();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let map = this.keyMap;
    let set = this.expiredKey;
    let ifExist = false;

    if (map.has(key)) {
        clearTimeout(map.get(key).timeoutID);
        ifExist = true;
    }

    let timeoutID = setTimeout(()=>set.add(key), duration);

    map.set(key, {value, timeoutID});

    set.delete(key);

    return ifExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.expiredKey.has(key) || !this.keyMap.has(key)) return -1;

    return this.keyMap.get(key).value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.keyMap.size - this.expiredKey.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */