const button = document.getElementById("btn1");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

function Add(number1,number2)
{
    return (typeof number1==="number" && typeof number2==="number")?number1+number2:+number1 + +number2;
}

button.addEventListener("click",function()
{
    console.log(Add(number1.value,number2.value));
})