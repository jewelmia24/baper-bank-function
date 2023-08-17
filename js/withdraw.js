document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInputuField = getInputFieldById("withdraw-input");
    const previousWithdraw = getElementTextValueById("withdraw-balance");
    const totalWithdraw = withdrawInputuField + previousWithdraw;
   

    const previousBalance = getElementTextValueById("total-balance");
    if (withdrawInputuField > previousBalance) {
        alert("baper bank a taka nai mamu")
        return;
    }
    const newTotalBalance = previousBalance - withdrawInputuField;
    setValue("total-balance", newTotalBalance)
    setValue("withdraw-balance", totalWithdraw)


})