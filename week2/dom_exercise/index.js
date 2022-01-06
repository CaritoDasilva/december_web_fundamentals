const btn = document.getElementById('btn');
// const msgs = [];
// console.log(msg)
function sum() {
    return 4 + 6
};

function hola(msg) {
    alert(`Hola cómo estás ${msg}`)
}

// btn.addEventListener('click', () => {
//     const txtResult = document.getElementById('txtResult');
//     const paragraph = document.createElement('p');
//     const msg = document.getElementById('message').value;
//     console.log("🚀 ~ file: index.js ~ line 26 ~ chao ~ txtResult", msg)
//     const text = document.createTextNode(msg)
//     paragraph.appendChild(text)
//     txtResult.appendChild(paragraph)
//     txtResult.classList.add('bar');

// })

function myFunction() {
    const txtResult = document.getElementById('txtResult');
    const paragraph = document.createElement('p');
    const msg = document.getElementById('message').value;
    console.log("🚀 ~ file: index.js ~ line 26 ~ chao ~ txtResult", msg)
    const text = document.createTextNode(msg)
    paragraph.appendChild(text)
    txtResult.appendChild(paragraph)
    txtResult.classList.add('bar');
    document.getElementById('message').value = "";
}

function hola() {
    const txtResult = document.getElementById('txtResult');
    txtResult.innerHTML = "Chao";
}

function chao() {
    const txtResult = document.getElementById('txtResult');
    
    txtResult.innerHTML = "";
}

console.log("🚀 ~ file: index.js ~ line 2 ~ sum ~ sum", sum());
