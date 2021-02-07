const helloWorld = () => {
    console.log('Hello');
}

helloWorld()

const add = (a,b) => {console.log(a + b);}

module.exports = {
    helloWorld,
    add
}

console.log("Plik załadowany pomyślnie");