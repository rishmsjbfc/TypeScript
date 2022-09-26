var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    "name": "Rishav",
    "age": 22,
    "tuple": [0, "zero"],
    "role": Role.ADMIN
};
person.role === Role.AUTHOR ? console.log("is Author") : console.log("not Author");
person.tuple = [1, "One"];
person.tuple[1] = "Two";
// person.tuple[1] = 2;//ERROR
person.tuple.push("Typescript"); //DEMERIT
console.log(person.tuple);
var handler = {
    get: function (target, property) {
        return property in target ? target[property] : 'Not exist';
    },
    set: function (target, property, value) {
        typeof value === "number" ? Reflect.set(target, property, value) : (value.length > 2)
            ? Reflect.set(target, property, value) : null;
        return true; //TypescriptError(2345)
    }
};
var proxy = new Proxy(person, handler);
console.log(proxy.name);
console.log(proxy.age);
proxy.name = "understanding typescript";
proxy.age = 1000;
console.log(proxy.name);
console.log(proxy.age);
