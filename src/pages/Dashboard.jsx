import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";

export default function Dashboard() {
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <TopNavbar />

            <SideNavbar />

            <Outlet />
        </div>
    );
}
