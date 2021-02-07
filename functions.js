const helloWorld = () => {
    console.log('Hello');
}

helloWorld()

const add = (a,b) => {console.log(a + b);}
const someTitle = "07.02.2020"; //kod do dopisania

module.exports = {
    helloWorld,
    add,
    someTitle
}

console.log("Plik załadowany pomyślnie");