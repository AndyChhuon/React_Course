import "./DisplayExpenses.css";
import ExpenseItem from "./ExpenseItem";

function DisplayExpenses(props) {
  let expensesArr = props.expenseArray;
  return (
    <div className="expenses">
      <ExpenseItem
        title={expensesArr[0].title}
        amount={expensesArr[0].amount}
        date={expensesArr[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesArr[1].title}
        amount={expensesArr[1].amount}
        date={expensesArr[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesArr[2].title}
        amount={expensesArr[2].amount}
        date={expensesArr[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default DisplayExpenses;
