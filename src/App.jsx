import { useState } from "react";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
    Router,
} from "react-router-dom";

import RouteLayout from "./layout/RouteLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

import NotFound from "./pages/NotFound.jsx";

import "./App.css";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardHome from "./pages/Dashboard/Home.jsx";
import Reports from "./pages/Dashboard/Reports.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<RouteLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardHome />}></Route>
                    <Route path="reports" element={<Reports />}></Route>
                </Route>

                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Route>
    )
);

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
