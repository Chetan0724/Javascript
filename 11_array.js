const marvel_heros = ["thor", "Ironman", "spiderman"]
console.log(marvel_heros); // Total elements: 3
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros)
console.log(marvel_heros); // Total elements: 4
console.log(marvel_heros[3]); // 4th element
console.log(marvel_heros[3][1]); // flash
marvel_heros.pop(dc_heros)
console.log(marvel_heros); // Total elements: 3


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
console.log(marvel_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Chetan"));
console.log(Array.from("Chetan"));
console.log(Array.from({name: "chetan"})); // Interesting case


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));