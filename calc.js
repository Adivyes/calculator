var inputNumber = document.getElementById('inputNumbers');

function showValue(value) {
    return inputNumber.value += value;
}

function equal() {
    if (!inputNumber.value) {
        return 0
    }
    

    try {
        return inputNumber.value = eval(inputNumber.value)
    } catch (e) {
        return showValue('Error');
    }
}

function clearValues() {
    return inputNumber.value = '';
}

function deleteOnValue() {
    return inputNumber.value = inputNumber.value.slice(0, inputNumber.value.length - 1);
}