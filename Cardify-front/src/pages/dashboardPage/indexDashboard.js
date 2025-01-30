import { useState } from "react";
import MainContent from "../../component/dahsboardComponents/mainContent/mainContent";
import Sidebar from "../../component/dahsboardComponents/sidebar/sidebar";
import './indexDashboard.css'

export default function IndexDashboard(){
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return(
        <div className="dashboard">
            <Sidebar isCollapsed={isCollapsed} onToggle={handleSidebarToggle} />
            <MainContent isCollapsed={isCollapsed} />
        </div>
    )
}