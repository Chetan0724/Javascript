const accountId = 144553
let accountEmail = "chetan@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "user@gmail.com"

accountPassword = "212111"

accountCity = "Sanawad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])