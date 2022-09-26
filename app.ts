const button = document.getElementById("btn1");
const number1 = document.getElementById("number1")! as HTMLInputElement;
const number2 = document.getElementById("number2")! as HTMLInputElement;
function Add(number1:number,number2:number)
{
    return number1 + number2;
}
button?.addEventListener("click",function(){
    console.log(Add(+number1.value,+number2.value));
});
