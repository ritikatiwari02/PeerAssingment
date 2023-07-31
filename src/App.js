// // // // import React from "react";
// // // // import { Routes ,Route}  from "react-router-dom";
// // // // import LoginPage from "./components/LoginPage";
// // // // import ExpensePage from "./components/ExpensePage";
// // // // import CreateExpensePage from "./components/CreateExpensePage";

// // // // import { Container } from "reactstrap";
// // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import "./App.css";

// // // // const App = () => {

// // // //   return (
// // // //     <div>
    
// // // //       <Container fluid>
// // // //         <h1>Todo App with Context API</h1>

// // // //         <Routes>
// // // //         <Route path="/"  element = {<LoginPage/>}/>
// // // //         <Route path="/expensePage"  element = {<ExpensePage/>}/>
// // // //         <Route path="/createExpensePage"  element = {<CreateExpensePage/>}/>  
// // // //       </Routes>
// // // //       </Container>
 
      

      
// // // //     </div>
// // // //   );
// // // // };
// // // // export default App;


// // // import React from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import LoginPage from "./components/LoginPage";
// // // import ExpensePage from "./components/ExpensePage";
// // // import CreateExpensePage from "./components/CreateExpensePage";

// // // import { Container } from "reactstrap";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import "./App.css";

// // // import { ExpenseProvider } from "./context/ExpenseContext";

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <Container fluid>
// // //         <h1>Todo App with Context API</h1>
// // //         <ExpenseProvider>
// // //           <Routes>
// // //             <Route path="/" element={<LoginPage />} />
// // //             <Route path="/expensePage" element={<ExpensePage />} />
// // //             <Route path="/createExpensePage" element={<CreateExpensePage />} />
// // //           </Routes>
// // //         </ExpenseProvider>
// // //       </Container>
// // //     </div>
// // //   );
// // // };
// // // export default App;

// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import LoginPage from "./components/LoginPage";
// // import ExpensePage from "./components/ExpensePage";
// // import CreateExpensePage from "./components/CreateExpensePage";

// // import { Container } from "reactstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./App.css";

// // import { ExpenseProvider } from "./context/ExpenseContext";

// // const App = () => {
// //   return (
// //     <div>
// //       <Container fluid>
// //         <h1>Todo App with Context API</h1>
// //         <ExpenseProvider>
// //           <Routes>
// //             <Route path="/" element={<LoginPage />} />
// //             <Route path="/createExpensePage" element={<CreateExpensePage />} />
// //            <Route path="/expensePage" element={<ExpensePage />} />
// //             {/* <Route path="/createExpensePage" element={<CreateExpensePage />} /> */}
// //           </Routes>
// //         </ExpenseProvider>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default App;





// import React from "react";
// import { Routes, Route,  useNavigate } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import ExpensePage from "./components/ExpensePage";
// import CreateExpensePage from "./components/CreateExpensePage";

// import { Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import { ExpenseProvider } from "./context/ExpenseContext";

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Container fluid>
//         <h1>Todo App with Context API</h1>
//         <ExpenseProvider>
//           <Routes>
//             <Route path="/" element={<LoginPage/>} />
//             <Route
//               path="/createExpensePage"
//               element={<CreateExpensePage navigate={navigate} />}
//             />
//             <Route path="/expensePage" element={<ExpensePage />} />
//           </Routes>
//         </ExpenseProvider>
//       </Container>
//     </div>
//   );
// };

// export default App;




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
