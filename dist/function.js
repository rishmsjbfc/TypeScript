var button = document.getElementById("btn1");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
function Add(number1, number2) {
    return number1 + number2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(Add(+number1.value, +number2.value));
});
