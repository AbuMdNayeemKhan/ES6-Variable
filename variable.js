//==========Variables==========//
    // There are 3 types of variables var, let, const.
    // Var variables can be redeclared and reassigned.
    // Let variables only can be reassigned.
    // The const variable is fixated. can't reassign or redeclare.

var varName = "Nayeem";
var varName = "Nayeem khan";
varName = "Abu Md Nayeem Khan";
console.log(varName);

let letName = "Nayeem";
// let LetName = "Nayeem khan"; Impossible to do that
letName = "Nayeem Khan";
console.log(letName);

const constName = "Nayeem";
// const constName = "Nayeem Khan"; Impossible to do that
// conso constName = "Abu Md Nayeem Khan"; Impossible to do that



//==========Variable Scope==========//
// There are two types of variable Scope. Local variable scope and global variable scope.
    var fullName = "Abu Md Nayeem Khan"; // Global variable
    function myfun(){
        let name = 'Nayeem Khan'; // Local variable
        console.log(name);
        console.log(fullName);
    }
    myfun();

//==========Variable Hoisting==========//
// Assign a variable without a variables name it's called assign variable.
myUrl = "AbuMdNayeemKhan"
console.log("My social media url is:" + myUrl);
var myUrl;