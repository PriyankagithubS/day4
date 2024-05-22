const stringArray = ["hello world"];

const titleCaseArray = stringArray.map((str) => {
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
});

console.log(titleCaseArray);
