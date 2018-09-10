const assert = require('assert');
const composition = require('./index');

describe('test to composition', () => {
    it('should return a function', () => {
        const comp = composition((r) => r * 2, (r) => r * 3);

        assert(typeof comp === 'function');
    });

    it('should return a function composed', () => {
        const comp = composition((r) => r * 2, (r) => r * 3);

        assert(comp(4) === 24);
    });

    it('should return a function composed', () => {
        const comp = composition([ (r) => r * 2, (r) => r * 3 ]);

        assert(comp(4) === 24);
    });
});
