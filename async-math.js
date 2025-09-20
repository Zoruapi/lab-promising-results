/**
 * SlowMath Library
 * Covalence, LLC
 */
let slowMath = (function() {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    function add(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(+a + +b);
            } else {
                return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
            }
        });
    }

    function subtract(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a - b);
            } else {
                return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
            }
        });
    }

    function multiply(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a * b);
            } else {
                return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
            }
        });
    }

    function divide(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            } else if (shouldResolve) {
                return Promise.resolve(a / b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
            }
        });
    }

    function remainder(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            } else if (shouldResolve) {
                return Promise.resolve(a % b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
            }
        });
    }

    function negativeCheck(a, b) {
        return a > -1 && b > -1;
    }

    return { add, subtract, multiply, divide, remainder };
})();