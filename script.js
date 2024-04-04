const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercent = document.getElementById('tipPercent');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const errorOutput = document.getElementById('error');

function validateInput(input) {
    if (!input.checkValidity()) {
        errorOutput.textContent = 'Please enter a valid positive number for the bill total.';
    }else{
        errorOutput.textContent = '';
    }
}

function calculateTip() {
    let bill = parseFloat(billTotal.value);
    let tip = tipSlider.value;
    if (bill >= 0) {
        let tipValue = bill * (tip / 100);
        let totalBill = bill + tipValue;
        tipAmount.value = tipValue.toFixed(2);
        totalAmount.value = totalBill.toFixed(2);
        errorOutput.textContent = '';
    } else {
        tipAmount.value = '';
        totalAmount.value = '';
        errorOutput.textContent = 'Please enter a valid positive number for the bill total.';
    }
}

billTotal.addEventListener('input', calculateTip);
tipSlider.addEventListener('input', function() {
    tipPercent.textContent = tipSlider.value + '%';
    calculateTip();
});