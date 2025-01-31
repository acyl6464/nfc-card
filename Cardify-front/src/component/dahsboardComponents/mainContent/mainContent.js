import React, { useState } from "react";
import profileImage from "../../../assets/images/profile.svg";
import "./mainContent.css";
import notificationvector from '../../../assets/images/notificationvector.svg'
import searchinputvector from '../../../assets/images/search-iconvector.svg'

const MainContent = ({ isCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={`main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Header Section */}
      <div className="header-search-bar">
        {/* Search Bar */}
        <div className="search-bar">
          <img src={searchinputvector} alt="serch-input-vector"/>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* Profile & Notifications */}
        <div className="profile-section">
          <div className="notifications">
          <img src={notificationvector} alt="notification-vector"/>
          </div>
          <div className="profile-avatar">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>

      {/* Main Content Below Header */}
      <h1>Content</h1>
    </div>
  );
};

export default MainContent;
