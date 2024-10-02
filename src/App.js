import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import Login from "./component/Login";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <TaskForm />
                  <TaskList />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
