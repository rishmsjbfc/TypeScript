type Combinable = number|string;
type conversionType = 'as-number'|'as-text';
function Add(num1:number,num2:number)
{
    return num1+num2;
}
let Combine:(num1:number,num2:number)=>number;
Combine = Add;
console.log(Combine(2,3));
function combine(input1:Combinable,input2:Combinable,resultConversion:conversionType)
{
    let result:number|string;
    if((typeof input1 === "number" && typeof input2 === "number")|| resultConversion==='as-number')
    {
        result = +input1 + +input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine("Rishav ","Raj",'as-text'));
console.log(combine(10,15,'as-number'));