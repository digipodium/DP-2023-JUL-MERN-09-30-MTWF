import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import EventHandling from "./components/EventHandling";
import StateManagement from "./components/StateManagement";
import TodoList from "./components/TodoList";
import ProductList from "./components/ProductList";
import ManageUser from "./components/ManageUser";
import { Toaster } from "react-hot-toast";
import UpdateUser from "./components/UpdateUser";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        <AnimatePresence>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="home" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<EventHandling />} path="event" />
            <Route element={<StateManagement />} path="state" />
            <Route element={<TodoList />} path="todo" />
            <Route element={<ProductList />} path="list" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<UpdateUser />} path="updateuser/:id" />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
