//alert("Hello world");

const example = () => {
    const fromInput = document.getElementById('example').nodeValue;
    document.getElementById('text').innerText = fromInput;
}

document.getElementById('action').addEventListener('click', example);