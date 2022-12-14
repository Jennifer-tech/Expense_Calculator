function addMoney(){
    var totalBudget = parseInt(document.getElementById("addMoney").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var money = parseInt(document.getElementById("money").value);
    if (money === "" || money === isNaN){
        alert("Please enter a valid number");
    }
    else{
        totalBudget += money;
        currentBalance += money;
        document.getElementById("totalBudget").innerHTML = totalBudget;
        document.getElementById("currentBalance").innerHTML = currentBalance;
    }
}

function addExpense(){
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var expenseName = document.getElementById("expenseName").value;
    var expenseAmount = parseInt(document.getElementById("expenseName").value);
        if(expenseName.length == ""){
            alert("Please enter an expense name");
        }
        else if(expenseAmount == "" || expenseAmount == isNaN){
            alert("Please enter a valid expense amount");
        }
        else if(expenseAmount <= currentBalance){
            currentBalance -= expenseAmount;
            document.getElementById("currentBalance").innerHTML = currentBalance;
            var para = document.createElement("p");
            para.innerHTML = `Expense Name : ${expenseName} <br> Expense Amount : ${expenseAmount}`;
            document.getElementById("addedExpenses").appendChild(para);
        }
        else{
            alert("Sorry your expense amount is higher than your current balance");
        }
}