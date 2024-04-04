const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercent = document.getElementById('tipPercent');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const errorOutput = document.getElementById('errorOutput');

function calculateTip() {
    let bill = parseFloat(billTotal.value);
    let tip = tipSlider.value;
    if (!isNaN(bill)) {
        let tipValue = bill * (tip / 100);
        let totalBill = bill + tipValue;
        tipAmount.value = tipValue.toFixed(2);
        totalAmount.value = totalBill.toFixed(2);
        errorOutput.textContent = '';
    } else {
        errorOutput.textContent = 'Please enter a valid number for the bill total.';
    }
}

billTotal.addEventListener('input', calculateTip);
tipSlider.addEventListener('input', function() {
    tipPercent.textContent = tipSlider.value + '%';
    calculateTip();
});