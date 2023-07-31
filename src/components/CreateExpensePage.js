import React, { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext";

const CreateExpensePage = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseUpdatedAt, setExpenseUpdatedAt] = useState("");
  const [expenseCreatedAt, setExpenseCreatedAt] = useState("");

  const { dispatch } = useExpenseContext();

  const handleAddExpense = () => {
    // Generate a unique ID 
    const id = Date.now();

    // Dispatch the action to add the expense
    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id,
        col1: expenseName,
        col2: expenseCategory,
        col3: expenseDate,
        col4: expenseAmount,
        col5: expenseUpdatedAt,
        col6: expenseCreatedAt,
      },
    });

    // Clear the input fields
    setExpenseName("");
    setExpenseCategory("");
    setExpenseDate("");
    setExpenseAmount("");
    setExpenseUpdatedAt("");
    setExpenseCreatedAt("");
  };

  return (
    <div>
      <h2>Create Expense</h2>
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
      />
      <input
        type="date"
        value={expenseDate}
        onChange={(e) => setExpenseDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Updated At"
        value={expenseUpdatedAt}
        onChange={(e) => setExpenseUpdatedAt(e.target.value)}
      />
      <input
        type="text"
        placeholder="Created At"
        value={expenseCreatedAt}
        onChange={(e) => setExpenseCreatedAt(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default CreateExpensePage;



