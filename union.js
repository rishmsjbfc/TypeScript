function Add(num1, num2) {
    return num1 + num2;
}
var Combine;
Combine = Add;
console.log(Combine(2, 3));
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine("Rishav ", "Raj", 'as-text'));
console.log(combine(10, 15, 'as-number'));
