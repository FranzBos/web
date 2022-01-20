const result = document.querySelector('.result')
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const editButtons = document.querySelectorAll('.edit')

let firstOperand = ""
let operation = ""
let isOperating = false

numberButtons.forEach(item => {
    item.addEventListener('click', event => {
        handleNumber(event.target.innerText)
    })
})

operationButtons.forEach(item => {
    item.addEventListener('click', event => {
        handleOperation(event.target.innerText)
    })
})

editButtons.forEach(item => {
    item.addEventListener('click', event => {
        handleEdit(event.target.innerText)
    })
})

function handleNumber(number) {
    if (isOperating) {
        result.textContent = number
        isOperating = false
    } else if (result.textContent !== "0") {
        result.textContent = result.textContent.concat(number)
    } else {
        result.textContent = number
    }
}

function handleOperation(operator) {
    if (operation !== "") {
        applyOperation(firstOperand, result.textContent, operation)
    }
    isOperating = true
    firstOperand = result.textContent
    operation = operator
}

function handleEdit(edit) {
    switch(edit) {
        case "C": reset(); break;
        case "⌫": del(); break;
    }
}

function applyOperation(firstOperand, secondOperand, operator) {
    switch (operator) {
        case "+": result.textContent = parseInt(firstOperand) + parseInt(secondOperand); break;
        case "-": result.textContent = parseInt(firstOperand) - parseInt(secondOperand); break;
        case "X": result.textContent = parseInt(firstOperand) * parseInt(secondOperand); break;
        case "÷": result.textContent = Math.round(parseInt(firstOperand) / parseInt(secondOperand)); break;
    }
}

function del() {
    if(result.textContent.length === 1) {
        result.textContent = "0"
        return
    }
    result.textContent = result.textContent.slice(0, -1)
}

function reset() {
    firstOperand = ""
    operation = ""
    isOperating = false
    result.textContent = "0"
}