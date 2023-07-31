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



// import React, { useState } from "react";
// import { useExpenseContext } from "../context/ExpenseContext";
// import { Link } from "react-router-dom";

// const CreateExpensePage = () => {
//   const [expenseName, setExpenseName] = useState("");
//   const [expenseAmount, setExpenseAmount] = useState("");
//   const { dispatch } = useExpenseContext();

//   const handleAddExpense = () => {
//     // Generate a unique ID (You can use a library like uuid for more robust ID generation)
//     const id = Date.now();

//     // Dispatch the action to add the expense
//     dispatch({
//       type: "ADD_EXPENSE",
//       payload: {
//         id,
//         col1: expenseName,
//         col2: "New Category", // Add category here
//         col3: expenseAmount,
//       },
//     });

//     // Clear the input fields
//     setExpenseName("");
//     setExpenseAmount("");
//   };

//   return (
//     <div>
//       <h2>Create Expense</h2>
//       <input
//         type="text"
//         placeholder="Expense Name"
//         value={expenseName}
//         onChange={(e) => setExpenseName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Expense Amount"
//         value={expenseAmount}
//         onChange={(e) => setExpenseAmount(e.target.value)}
//       />
//       <button onClick={handleAddExpense}>Add Expense</button>

//       {/* View Expense button */}
//       <Link to="/expensePage">
//         <button className="mt-4 bg-indigo-100 text-black py-0.1 px-1 rounded-md hover:bg-blue-600">
//           View Expense
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default CreateExpensePage;



// CreateExpensePage.js
// import React, { useState } from "react";
// import { useExpenseContext } from "../context/ExpenseContext";
// import { Link } from "react-router-dom";

// const CreateExpensePage = () => {
//   const [expenseName, setExpenseName] = useState("");
//   const [category, setCategory] = useState("");
//   const [dateOfExpense, setDateOfExpense] = useState("");
//   const [expenseAmount, setExpenseAmount] = useState("");
//   const { dispatch } = useExpenseContext();

//   const handleAddExpense = () => {
//     // Generate a unique ID (You can use a library like uuid for more robust ID generation)
//     const id = Date.now();

//     // Dispatch the action to add the expense
//     dispatch({
//       type: "ADD_EXPENSE",
//       payload: {
//         id,
//         col1: expenseName,
//         col2: category,
//         col3: dateOfExpense,
//         col4: expenseAmount,
//         col5: "Column 5 data", // Update this with appropriate data
//         col6: "Column 6 data", // Update this with appropriate data
//         col7: "Column 7 data", // Update this with appropriate data
//       },
//     });

//     // Clear the input fields
//     setExpenseName("");
//     setCategory("");
//     setDateOfExpense("");
//     setExpenseAmount("");
//   };

//   return (
//     <div>
//       <h2>Create Expense</h2>
//       <input
//         type="text"
//         placeholder="Expense Name"
//         value={expenseName}
//         onChange={(e) => setExpenseName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Date of Expense"
//         value={dateOfExpense}
//         onChange={(e) => setDateOfExpense(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Expense Amount"
//         value={expenseAmount}
//         onChange={(e) => setExpenseAmount(e.target.value)}
//       />
//       <button onClick={handleAddExpense}>Add Expense</button>

//       {/* View Expense button */}
//       <Link to="/expensePage">
//         <button className="mt-4 bg-indigo-100 text-black py-0.1 px-1 rounded-md hover:bg-blue-600">
//           View Expense
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default CreateExpensePage;



