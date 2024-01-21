let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateOne.toLocaleString());

let myCreatedDateTwo = new Date("2023-01-14")
console.log(myCreatedDateTwo.toLocaleString());

let myCreatedDateThree = new Date("01-14-2023")
console.log(myCreatedDateThree.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDateThree.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})