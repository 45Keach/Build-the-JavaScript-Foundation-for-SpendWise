// SpendWise JavaScript Foundation
let budget = 0;
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;

function calculateTotalExpenses(expenseList) {
  return expenseList.reduce((total, expense) => total + expense, 0);
}

function calculateRemainingBalance(budgetAmount, spentAmount) {
  return budgetAmount - spentAmount;
}

function getNumberInput(message) {
  const input = prompt(message);
  if (input === null) return null;
  const value = Number(input);
  if (!Number.isFinite(value) || value < 0) {
    alert("Please enter a valid number greater than or equal to 0.");
    return getNumberInput(message);
  }
  return value;
}

function collectBudgetData() {
  const budgetInput = getNumberInput("Enter your total budget:");
  if (budgetInput === null) return false;
  const expenseCount = getNumberInput("How many expenses would you like to enter?");
  if (expenseCount === null) return false;
  if (!Number.isInteger(expenseCount)) {
    alert("The number of expenses must be a whole number.");
    return collectBudgetData();
  }
  budget = budgetInput;
  expenses = [];
  for (let i = 0; i < expenseCount; i += 1) {
    const expense = getNumberInput("Enter expense " + (i + 1) + " amount:");
    if (expense === null) return false;
    expenses.push(expense);
  }
  totalExpenses = calculateTotalExpenses(expenses);
  remainingBalance = calculateRemainingBalance(budget, totalExpenses);
  displayResults();
  return true;
}

function displayResults() {
  const currency = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"});
  document.querySelector("#budgetDisplay").textContent = currency.format(budget);
  document.querySelector("#expensesDisplay").textContent = currency.format(totalExpenses);
  document.querySelector("#remainingDisplay").textContent = currency.format(remainingBalance);
  document.querySelector("#status").textContent = remainingBalance >= 0
    ? "You have " + currency.format(remainingBalance) + " remaining."
    : "You are " + currency.format(Math.abs(remainingBalance)) + " over budget.";
  console.log("=== SpendWise Budget Results ===");
  console.log("Budget:", currency.format(budget));
  console.log("Expenses:", expenses.map(expense => currency.format(expense)));
  console.log("Total Expenses:", currency.format(totalExpenses));
  console.log("Remaining Balance:", currency.format(remainingBalance));
}

function resetBudget() {
  budget = 0; expenses = []; totalExpenses = 0; remainingBalance = 0;
  document.querySelector("#budgetDisplay").textContent = "$0.00";
  document.querySelector("#expensesDisplay").textContent = "$0.00";
  document.querySelector("#remainingDisplay").textContent = "$0.00";
  document.querySelector("#status").textContent = "Click the button to enter your budgeting information.";
  console.log("SpendWise has been reset.");
}

document.querySelector("#startButton").addEventListener("click", collectBudgetData);
document.querySelector("#resetButton").addEventListener("click", resetBudget);