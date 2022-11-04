import React from "react";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Chatapp from "./components/Chatapp/Chatapp";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserAuth } from "./components/AuthContext";
function App() {

  const {currentUser} = UserAuth()
  // protecting routes
  const ProtectedRoute = ({ children }) => {
    const { currentUser } = UserAuth();

    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }

    return children;
  };
  console.log(currentUser)
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Chatapp />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
