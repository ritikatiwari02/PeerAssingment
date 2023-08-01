import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ExpensePage from "./components/ExpensePage";
import CreateExpensePage from "./components/CreateExpensePage";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
  return (
    <div>
      <Container fluid>
        <ExpenseProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/createExpensePage" element={<CreateExpensePage />} />
            <Route path="/expensePage" element={<ExpensePage />} />
          </Routes>
        </ExpenseProvider>
      </Container>
    </div>
  );
};

export default App;
