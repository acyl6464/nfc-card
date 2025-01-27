import MainContent from "../../component/dahsboardComponents/mainContent/mainContent";
import Sidebar from "../../component/dahsboardComponents/sidebar/sidebar";
import './indexDashboard.css'

export default function IndexDashboard(){
    return(
        <div className="dashboard">
            <Sidebar />
            <MainContent />
        </div>
    )
}