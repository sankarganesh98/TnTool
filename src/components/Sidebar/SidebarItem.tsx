import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '../../styles/Sidebar.module.css';

interface SidebarItemProps {
    title: string;
    icon: IconDefinition;
    path: string;  // Adding a path prop to identify the navigation link
}

function SidebarItem({ title, icon, path }: SidebarItemProps): React.ReactElement {
    return (
        <div className={styles.sidebarItemWrapper}>
            <NavLink to={path} className={({ isActive }) => isActive ? `${styles.sidebarItem} ${styles.active}` : styles.sidebarItem}>
                <FontAwesomeIcon icon={icon} style={{ marginRight: '20px' }} />
                {title}
            </NavLink>
        </div>
    );
}

export default SidebarItem;
