const accountId = 23947   // Use const when you can...
let accoutnEamil = "aminthenics@google.com"  // Use let when you have to...
var accountPassword = "jhrof!33"
accountCity = "Dhaka"  // Readability should be high...
let accountState;     // Readability should be high...

/*
Prefer not to use var, 
because of block-scoped & functional-scoped.
 */


// accountId = 223 // Assignment to constant variable. 

console.log(accountId);
console.table([accoutnEamil, accountPassword, accountCity, accountState])

accoutnEamil = "nothing@yahoo.com"
accountPassword = "394209!%"
accountCity = "Rangpur"


console.table([accoutnEamil, accountPassword, accountCity])