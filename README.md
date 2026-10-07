# SpendWise — JavaScript Foundation

SpendWise is a simple budgeting application that turns a visual budget interface into a working JavaScript application. Users enter a total budget and the number and amount of their expenses through JavaScript prompts. SpendWise calculates total spending and the remaining balance, then displays the results on the page and in the browser console.

## JavaScript Concepts Implemented

### Variables and data types
The project uses `budget`, `expenses`, `totalExpenses`, and `remainingBalance`. Numbers store monetary values, an array stores individual expenses, strings are used for prompts and messages, and `null` represents cancelled input.

### User input
The `prompt()` function collects budget and expense information. `Number()` converts prompt strings into numbers. `Number.isFinite()` and `Number.isInteger()` validate input.

### Calculations
Total spending is calculated with `calculateTotalExpenses(expenses)`. The remaining balance is calculated with `calculateRemainingBalance(budget, totalExpenses)`, using: **remaining balance = budget − total expenses**.

### Functions
`getNumberInput()` handles validated input, `calculateTotalExpenses()` totals expenses, `calculateRemainingBalance()` calculates the balance, `collectBudgetData()` coordinates the workflow, `displayResults()` updates the page and console, and `resetBudget()` clears the data.

## Files
- `index.html` — structure and controls
- `style.css` — responsive styling
- `script.js` — JavaScript functionality
- `README.md` — project documentation

## How to Run
1. Open `index.html` in a modern browser.
2. Click **Enter Budget & Expenses**.
3. Enter the requested budget, expense count, and expense amounts.
4. View the calculated summary on the page.
5. Open Developer Tools → Console to see labeled results.

## Example
For a $1,000 budget with expenses of $250, $100, and $75:
- Total Expenses = $425
- Remaining Balance = $575

## Testing
The application handles valid values, multiple expenses, zero expenses, invalid/negative input, cancelled prompts, reset functionality, and console output. The JavaScript file is linked with `defer` so it loads safely with the page.