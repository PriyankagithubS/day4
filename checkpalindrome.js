function isPalindrome(arr, start, end) {
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function findAllPalindromicSubarrays(arr) {
    const palindromicSubarrays = [];
    if(arr.length>1){
    for (let start = 0; start < arr.length; start++) {
        for (let end = start + 1; end < arr.length; end++) {
            if (isPalindrome(arr, start, end)) {
                const subarray = [];
                for (let i = start; i <= end; i++) {
                    subarray.push(arr[i]);
                }
                palindromicSubarrays.push(subarray);
            }
        }
    }

    return palindromicSubarrays;
}
return false;
}

const array = [1, 0, 1, 2, 3, 4, 3, 5, 6, 8];
const palindromicSubarrays = findAllPalindromicSubarrays(array);
console.log(palindromicSubarrays);
