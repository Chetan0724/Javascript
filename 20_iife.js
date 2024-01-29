// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();

// Syntax --> (Function Defination) (Execution Call)

( function aurcode() {
    console.log(`DB CONNECTED TWO`);
} ) ();


( () => {
    console.log(`DB CONNECTED THREE`);
} ) ();


( (name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
} ) ('CHETAN')