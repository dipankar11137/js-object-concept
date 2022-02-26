const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

if (first === second) {
    console.log('Object are equal');
} else {
    console.log('Object are different');
}

// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));

/* if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('They are equal');
} */

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first, second);
console.log(isEqual);