// JavaScript: 
// comments (2)   -> inline (//), multi-line (/* ... */) 
// data types (7) -> undefined, null, boolean, string, symbol, number, object
//    numeric -> number, decimal
//    string  -> "" or '' or ``
//            -> strings are immutable
// variables (3)  -> var, let, const 
//     let - cannot declare same variable twice & let - block scope
//     declare    -> var a; 
//     assignment -> a = 2; 
//     declare & assign -> var a = 2;
//     local variable overrides -> global
//     de-structurig: var var1 = {x: 1, y: 2, z: 3}; const{ x:a, y:b, z:c } = var1; => a=1, b=2, c=3
// Operators
//     arithmatic -> +, -, /, *, ++, --, % (remainder)
//     assignment -> +=, -=, *=, /=, %=
//     equality   -> == (normal) & === (strict)
//     ternary    -> condition ? ret-if-true : ret-if-false
//        nesting: num > 0 ? "+ve" : num < 0 ? "-ve" : "zero"
// Data Structures -> Array [] Object {}
//        template literals `... ${pers_name} .` -> multiline string with per_name variable replaced with its value
// Controls
//     If -> if{} or if {} else {} or if {} or else if {} or else {}
//     Switch -> switch() { case a: ... break; case b: .. break; default: break}
// Loops
//     while -> while () {...}
//     for   -> for( ; ; ) {...}
//     do    -> do {...} while()
// Objects  -> key value pair same as python dictionaries
//     define -> var obj_name = {"key": value}
//     properties 
//         reference -> obj_name.key or obj_name['key'] or obj_name[var]
//         set -> obj_name.key = value-1
//         add -> obj_name.new-key = "new-value"
//         del -> delete obj_name.key
//         exists? -> obj_name.hasOwnProperty("property-name")
//     object.freeze(obj) -> stops object mutation
// Class [ES6] 
//     class xx { const() { this.xx = ..}} -> constructors
//     getters & setters -> parameters are accessed using class methods
// Exceptions: 
//      try {...} catch {...} finally {...}
// Functional Aspects: 
//     Rest operator -> (...args) ~ same as args* in C
//     Spread operator -> spreads array into individual parts
//     Anonymous function: var magic1 = function() { return new Date(); }
//     Arrow function: var magic1 = () => { return new Date(); }
//                     var magic = () => new Date(); 
//     Higher order functions: map(), filter(), reduce() -> functions as parameters
//          filter: nums.filter( a => a > 0); 
//          map   : nums.filter( a => a > 0).map( x => x * x )
//          reduce: reduce((a,b) => a+b, 0)
//   "use strict" -> catch coding mistakes
// Import & Export of methods & parameters from some files & access in other
//     import & export default

const nums = [2, 3, 5, -4, -0.39, 6];
nums2 = nums.filter( a => a > 0); 
nums3 = nums.filter( a => a > 0).map( x => x * x)


console.log("nums: " + nums);
console.log("nums2: " + nums2);
console.log("nums3: " + nums3);
console.log("Saving new file / test git")
console.log("create new feature")
console.log("create branch feature2")

//console.log(magic1());