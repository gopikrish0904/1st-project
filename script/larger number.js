
    function findAndDisplayLargerNumber() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      if (!isNaN(num1) && !isNaN(num2)) {
        const largerNumber = findLargerNumber(num1, num2);
        document.getElementById("result").textContent = "The larger number is: " + largerNumber;
      } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
      }
    }

    function findLargerNumber(number1, number2) {
      if (number1 > number2) {
        return number1;
      } else {
        return number2;
      }
    }
  