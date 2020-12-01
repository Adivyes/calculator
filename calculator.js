//  window.onload = ()=>{
//    onecal.addEventListener('click', ()=>{calcu.value += 1})
//    twocal.addEventListener('click', ()=>{calcu.value += 2})
//    treecal.addEventListener('click', ()=>{calcu.value += 3})
//    fourcal.addEventListener('click', ()=>{calcu.value += 4})
//    fivecal.addEventListener('click', ()=>{calcu.value += 5})
//    sixcal.addEventListener('click', ()=>{calcu.value += 6})
//    sevencal.addEventListener('click', ()=>{calcu.value += 7})
//    eightcal.addEventListener('click', ()=>{calcu.value += 8})
//    ninecal.addEventListener('click', ()=>{calcu.value += 9})
//    zerocal.addEventListener('click', ()=>{calcu.value += 0})
//    mincal.addEventListener('click', ()=>{calcu.value += "-"})
//    sumcal.addEventListener('click', ()=>{calcu.value += "+"})
//    divical.addEventListener('click', ()=>{calcu.value += '/'})
//    decemelcal.addEventListener('click', ()=>{calcu.value += '.'})
//    multical.addEventListener('click', ()=>{calcu.value += '*'})
//    ACcal.addEventListener('click', ()=>{calcu.value = ' '})
//    resultcal.addEventListener('click', ()=>{calcu.value = ' '})







// // function messegeNum(num){
//     switch (num){

//         case 1:
//             messagebtn.innerHTML = 
//             break;
//         case 2:
//             messagebtn.innerHTML = 
//             break;
//         case 3:
//             messagebtn.innerHTML = 
//             break;
//         case 4:
//             messagebtn.innerHTML = 
//             break;
//         case 5:
//             messagebtn.innerHTML = 
//             break;
//         case 6:
//             messagebtn.innerHTML = 
//             break;
//         case 7:
//             messagebtn.innerHTML = 
//             break;
//         case 8:
//             messagebtn.innerHTML = 
//             break;
//             default:
//                 messagebtn.innerHTML = `n/v`
//     }
// }


class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})