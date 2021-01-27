document.getElementById("log-in-btn").addEventListener("click", function () {
    document.getElementById("log-in-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
});

transactonArea("depositBtn", "withdrawBtn");


function transactonArea(firstBtn, secondBtn) {
    // deposit button
    document.getElementById(firstBtn).addEventListener("click", function () {
        var depositAmountNumber = getInputValue("depositAmount");

        spanTagValue("currentDeposit", depositAmountNumber);
        spanTagValue("currentBalance", depositAmountNumber);
        document.getElementById("depositAmount").value = "";
    });
    // withdraw button
    document.getElementById(secondBtn).addEventListener("click", function () {
        var withdrawAmountNumber = getInputValue("withdrawAmount");

        spanTagValue("currentWithdraw", withdrawAmountNumber);
        spanTagValue("currentBalance", -withdrawAmountNumber);

        document.getElementById("withdrawAmount").value = "";
    });
    function spanTagValue(id, addedNumber) {
        var current = document.getElementById(id).innerText;
        var currentNumber = parseFloat(current);
        var total = addedNumber + currentNumber;
        document.getElementById(id).innerText = total;
    }
    function getInputValue(id) {
        var amount = document.getElementById(id).value;
        var amountNumber = parseFloat(amount);
        return amountNumber;
    }
}

