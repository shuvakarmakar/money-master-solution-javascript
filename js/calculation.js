function incomeValueField(salary){
    const incomeInputField = document.getElementById(salary);
    const incomeInputFieldString = incomeInputField.value;
    const incomeValueNow = parseFloat(incomeInputFieldString);
    if(!isNaN(parseInt(incomeValueNow))){
        return incomeValueNow;
    }
    else{
        alert('Please Input an Integer Number in the Income Field');
    }
    
}
function getBalanceValue(balanceValue){
    const balanceRemaingAfterExpense = document.getElementById(balanceValue);

    return balanceRemaingAfterExpense;
}

document.getElementById('calculate').addEventListener('click',function(){
    // Get Income Value
    const incomeValue = incomeValueField('income');
    
    // Food Expense
    const foodExpenseValue = document.getElementById('food');
    const foodExpenseValueString = foodExpenseValue.value;
    const foodExpense = parseFloat(foodExpenseValueString);
    

    // Rent Expense
    const rentExpenseValue = document.getElementById('rent');
    const rentExpenseValueString = rentExpenseValue.value;
    const rentExpense = parseFloat(rentExpenseValueString);
    

    // Clothes Expense
    const clothesExpenseValue = document.getElementById('clothes');
    const clothesExpenseValueString = clothesExpenseValue.value;
    const clothesExpense = parseFloat(clothesExpenseValueString);
    

    const totalExpenseMonthly = foodExpense + rentExpense + clothesExpense;

    const totalExpense = incomeValue - totalExpenseMonthly;

    const totalExpenseTextValue = document.getElementById('total-expense');
    // const totalExpenseTextValueString = totalExpenseTextValue.innerText;
    // const totalExpenseValue = parseFloat(totalExpenseTextValueString);

    // Total Expense
    totalExpenseTextValue.innerText = totalExpenseMonthly;

    // Balance Remain After Expense
    const balanceRemaing = getBalanceValue('balance');
    balanceRemaing.innerText = totalExpense;

})

document.getElementById('btn-save').addEventListener('click', function(){
    // Get Income Value after function call 
    const incomeValue = incomeValueField('income');
    console.log('Got Income value');

    const savingsInputField = document.getElementById('save');
    const savingsInputFieldString = savingsInputField.value;
    const savingsInput = parseFloat(savingsInputFieldString);
    console.log('Got Savings value');

    const savingsAmountTotal = document.getElementById('saving-amount');
    // const savingsAmountValueString = savingsAmountValue.innerText;
    // const savingsAmountNow = parseFloat(savingsAmountValueString);
    
    // Show Savings Value
    const savingsAmountValue = (incomeValue/100) * savingsInput;
    savingsAmountTotal.innerText = savingsAmountValue;

    // Final Remaining Balance
    const balanceRemaing = getBalanceValue('balance');
    const balanceRemainingString = balanceRemaing.innerText;
    const balanceRemainingNow = parseFloat(balanceRemainingString);
    console.log(balanceRemainingNow);
    
    // Substraction with Balanceremaining Finally and Savings Amount Value
    const remainingTotal = balanceRemainingNow - savingsAmountValue;
    console.log(remainingTotal);

    // Get Value of remaining balance
    const remainingBalanceValue = document.getElementById('remaining-balance');
    remainingBalanceValue.innerText = remainingTotal;


})