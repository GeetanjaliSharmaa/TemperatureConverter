function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    let result = '';

    if (celsiusInput !== '') {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (fahrenheitInput !== '') {
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = (fahrenheit - 32) * 5/9;
        result = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        result = 'Please enter a value in one of the fields.';
    }

    document.getElementById('result').innerText = result;
    showModal();
}

function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
