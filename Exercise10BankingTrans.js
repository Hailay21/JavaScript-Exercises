//Truck account balance and perform transaction
//Balance + deposit - withdraw; transaction are credit and debit
//credit: debt - deposit;
//debit: balance - withdraw;
let accountBalance = 1000;
function deposit(deposit){
    if(isNaN(deposit) || deposit<=0){
        return "Invalid input";

    }
    accountBalance += deposit;
    console.log(`new balance: ${accountBalance}`);
}

const withdraw = (withdrawAmount) => {
    if(isNaN(deposit) || deposit<=0){
        return "Invalid input";

    }
    accountBalance -= withdrawAmount;
    console.log(`new balance: ${accountBalance}`);
    console.log(`withdraw amount: ${accountBalance}`);
}

function viewBalance() {
    console.log(`account Balance: ${accountBalance}`);
}

let depositResult = deposit(5000.00);
let withdrawResult = withdraw(5000.00);
let viewBalanceResult = viewBalance(5000.00);

console.log(`deposit result: ${depositResult}`);
console.log(`withdraw result: ${withdrawResult}`);//undefined
console.log(`viewBalance result: ${viewBalanceResult}`);// 