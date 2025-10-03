console.log("Hello world")

/**
 * @type {string}
 */
const valtozo = "John Darksoul"
console.log(valtozo)


/**
 * @type {string[]}
 */
const tomb=["igen", "nem"]
console.log(tomb[0])

for(let i = 0; i < tomb,length; i++){
    console.log(tomb[i])
}

for(const i of tomb){
    console.log(i)
}

for(const key in tomb){
    console.log(`${key}:${tomb[key]}`)
}

/**
 * @type {{nev:string, age:number}}
 */
const a = {
    nev:"John",
    age:18
}

console.log(a)