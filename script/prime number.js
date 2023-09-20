function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function findPrimes() {
    const numberInput = document.getElementById("numberInput");
    const primeList = document.getElementById("primeList");
    primeList.innerHTML = "";

    const n = parseInt(numberInput.value);

    if (isNaN(n) || n < 2) {
        alert("Please enter a valid positive integer greater than or equal to 2.");
        return;
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            const li = document.createElement("li");
            li.textContent = i;
            primeList.appendChild(li);
        }
    }
}
