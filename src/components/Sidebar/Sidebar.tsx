import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import SidebarItem from './SidebarItem.tsx';
import AvatarSection from './AvatarSection';
import { faTachometerAlt, faUserCircle, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '/tn_logo.jpg';


function Sidebar(): React.ReactElement {
    return (
        <div className={styles.sidebar}>
        <div className={styles.menuContent}>

        <AvatarSection avatarUrl="path/to/avatar.jpg" accountName="John Doe" />
            <SidebarItem title="Overview-Dashboard" icon={faTachometerAlt} path="/overview" />
            <SidebarItem title="Personal-Dashboard" icon={faUserCircle} path="/personal" />
            <SidebarItem title="FIV-Dashboard" icon={faChartLine} path="/fiv" />
            <SidebarItem title="Account" icon={faUser} path="/account" />
            </div>
        <div>
            <button className={styles.logoutButton}>Log Out</button>
            <div className={styles.companyLogoPlaceholder}>
                <img className={styles.companyLogo} src={Logo} alt="Company Logo" />
            </div>
        </div>
    </div>
    );
}

export default Sidebar;
