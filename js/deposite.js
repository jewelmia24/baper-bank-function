document.getElementById("deposite-btn").addEventListener("click",function(){
    const depositeInputuField = getInputFieldById("deposite-input");
    const previousDeposite = getElementTextValueById("deposite-balance");
    const totalDeposite = depositeInputuField + previousDeposite;
    setValue("deposite-balance", totalDeposite)
    const previousBalance = getElementTextValueById("total-balance");
    const newTotalBalance = previousBalance + depositeInputuField;
    setValue("total-balance", newTotalBalance)

    
})