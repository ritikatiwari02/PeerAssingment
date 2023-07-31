import React, { useState } from "react";
import { useExpenseContext } from "..//context/ExpenseContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExpensePage = () => {
  const { state, dispatch } = useExpenseContext();
  const { expenses } = state;

  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState(null);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const handleEdit = (expense) => {
    setIsEditing(true);
    setEditedExpense(expense);
  };

  const handleSaveEdit = () => {
    if (editedExpense) {
      dispatch({
        type: "EDIT_EXPENSE",
        payload: {
          id: editedExpense.id,
          editedExpense,
        },
      });
    }
    setIsEditing(false);
    setEditedExpense(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedExpense(null);
  };

  return (
    <div>
      <h2>Expense Page</h2>
      <Link to="/createExpensePage">Create New Expense</Link>
      <table className="table-auto border-collapse w-full">
        {/* Table header... */}
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="border px-4 py-2">{expense.col1}</td>
              <td className="border px-4 py-2">{expense.col2}</td>
              <td className="border px-4 py-2">{expense.col3}</td>
              <td className="border px-4 py-2">Column 4 data</td>
              <td className="border px-4 py-2">Column 5 data</td>
              <td className="border px-4 py-2">Column 6 data</td>
              <td className="border px-4 py-2">
                {isEditing && editedExpense?.id === expense.id ? (
                  <>
                    <button
                      className="text-green-500"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="text-red-500 ml-2"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="text-blue-500"
                      onClick={() => handleEdit(expense)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 ml-2"
                      onClick={() => handleDelete(expense.id)}
                    >
                      <FaTrash />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensePage;



