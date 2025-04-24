let balance = 1000;

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        updateDisplay(`Deposited $${amount}`);
    } else {
        updateDisplay("Enter a valid amount to deposit.");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateDisplay(`Withdrew $${amount}`);
    } else if (amount > balance) {
        updateDisplay("Insufficient balance.");
    } else {
        updateDisplay("Enter a valid amount to withdraw.");
    }
}

function updateDisplay(message) {
    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('message').textContent = message;
    document.getElementById('amount').value = '';
}
