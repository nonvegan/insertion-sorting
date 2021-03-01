const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const divRanges = document.getElementById('div')
const button = document.createElement('button')
const range = document.createElement('input')
const rangeLabel = document.createElement('label')
const width = window.screen.height / 2
const height = window.screen.height / 2
let array = []
let scale = 5

function setup() {
    range.setAttribute("type", "range")
    rangeLabel.innerText = "Scale"
    range.value = 50
    button.innerHTML = "<span>Random</span> values"
    button.addEventListener('click', () => {
        reset()
    })
    range.addEventListener('input', () => {
        scale = 11 - range.value / 10
        reset()
    })
    divRanges.appendChild(rangeLabel)
    divRanges.appendChild(range)
    divRanges.appendChild(button)
    canvas.width = width
    canvas.height = height
    ctx.fillStyle = "white"
    for (let x = 0; x < (width / scale); x++) {
        array[x] = height / (width / scale) * x
    }
    for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array.length; i++) {
            swap(i, getRandomInt(0, array.length - 1), array)
        }
    }
}

function draw() {
    for (let x = 0; x < array.length; x++) {
        ctx.fillStyle = hsvToRgb(mapValue(array[x], 0, width, -30, 300), 100, 100).hex()
        ctx.fillRect(x * scale, height - array[x], scale / 2, array[x])
    }
    insertionSort()
}

let gI = 1

function insertionSort() {
    let gJ = gI - 1
    let key = array[gI]
    if (gI < array.length) {
        while (gJ >= 0 && array[gJ] > key) {
            array[gJ + 1] = array[gJ]
            gJ--
        }
        gI++
        array[gJ + 1] = key

    }
}

function reset() {
    array = []
    for (let x = 0; x < (width / scale); x++) {
        array[x] = height / (width / scale) * x
    }
    for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array.length; i++) {
            swap(i, getRandomInt(0, array.length - 1), array)
        }
    }
    for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array.length; i++) {
            swap(i, getRandomInt(0, array.length - 1), array)
        }
    }
    gI = 0
    gJ = 0
}



function clear() {
    ctx.clearRect(0, 0, width, height)
}

setup()
setInterval(() => {
    clear()
    draw()
}, getMs(30));
