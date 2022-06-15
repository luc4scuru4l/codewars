/*Description:

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
solution(1000); // should return 'M'
*/
function solution(number){
    const arr = number.toString().split('')
    const l = arr.length
    const base10 = ['I', 'X', 'C', 'M']
    const base5 = ['V', 'L', 'D']
    const a = base10[l - 1]
    const b = base5[l - 1]
    const format = {
        '0' : '',
        '1' : a,
        '2' : a.repeat(2),
        '3' : a.repeat(3),
        '4' : a + b,
        '5' : b,
        '6' : b + a,
        '7' : b + a.repeat(2),
        '8' : b + a.repeat(3),
        '9' : a + base10[l]
    }
    return format[arr[0]] + ((l == 1) ? '' : solution(parseInt(arr.slice(1, l).join('')))) 
}
