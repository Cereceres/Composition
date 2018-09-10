const func = 'function';
const { isArray } = Array;
module.exports = (..._functions) => {
    if (_functions.length === 1 && isArray(_functions[0])) _functions = _functions[0];

    const functions = _functions.reverse();

    return (...args) => functions.reduce((res, $function, index) => {
        if (typeof $function === func && !index) return $function(...res);

        if (typeof $function === func) return $function(res);

        if (!index) return [ $function, ...res ];

        return [ $function, res ];
    }, args);
};
