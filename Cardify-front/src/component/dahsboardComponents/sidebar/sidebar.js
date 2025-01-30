import { useState } from "react";
import cardifylogo from '../../../assets/images/cardifylogo.svg'
import homevector from '../../../assets/images/homevector.svg'
import managepagesvector from '../../../assets/images/managepagesvector.svg'
import leadsvector from '../../../assets/images/leadsvector.svg'
import analyticsvector from '../../../assets/images/analyticsvector.svg'
import smarttoolsvector from '../../../assets/images/smarttoolsvector.svg'
import nfcshopvector from '../../../assets/images/nfcshopvector.svg'
import settingsvector from '../../../assets/images/settingsvector.svg'
import squarevector from '../../../assets/images/square.svg'
import './sidebar.css'

export default function Sidebar({ isCollapsed, onToggle }){
    return(
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="logo" onClick={onToggle}>
                <div className="logo-icon">
                    <img src={cardifylogo} alt="cardify-logo" />
                    <p className={isCollapsed ? "collapsed-logo" : ""}>CARDIFY</p>
                </div>
                <div className="toggle-icon">
                    <img src={squarevector} alt="home-vector" />
                </div>
            </div>
            <ul className="nav-items-top">
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={homevector} alt="home-vector" />
                    <p>Home</p>
                </li>
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={managepagesvector} alt="manage-pages-vector" />
                    <p>Manage Your Pages</p>
                </li>
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={leadsvector} alt="leads-vector" />
                    <p>Leads</p>
                </li>
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={analyticsvector} alt="analytics-vector" />
                    <p>Analytics</p>
                </li>
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={smarttoolsvector} alt="smart-tools-vector" />
                    <p>Smart tools</p>
                </li>
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={nfcshopvector} alt="nfc-shop-vector" />
                    <p>NFC shop</p>
                </li>
            </ul>
            <ul className="nav-items-bottom">
                <li className={isCollapsed ? "collapsed-item" : ""}>
                    <img src={settingsvector} alt="settings-vector" />
                    <p>Settings</p>
                </li>
            </ul>
        </div>
    );
}
