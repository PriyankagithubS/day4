const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(arrayWithDuplicates));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.filter((value, index, array) => {
    return array.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
