import React, { useState } from 'react';
import styles from '../../styles/Sidebar.module.css';

interface AvatarSectionProps {
    avatarUrl: string;
    accountName: string;
}

const AvatarSection: React.FC<AvatarSectionProps> = ({ avatarUrl, accountName }) => {
    const [imgError, setImgError] = useState(false);

    const handleError = () => {
        setImgError(true); // If the image fails to load, show the fallback icon
    };

    return (
        <div className={styles.avatarSection}>
            {!imgError ? (
                <img src={avatarUrl} alt="Avatar" className={styles.avatar} onError={handleError} />
            ) : (
                <i className={`fas fa-user-circle ${styles.avatar}`} /> // Use Font Awesome user icon
            )}
            <p className={styles.accountName}>{accountName}</p>
        </div>
    );
};

export default AvatarSection;
