import React from 'react';
import styles from './projectTag.less';

const ProjectTag = ({ text }) => {
    return (
        <div className={styles.tagContent}>
            <div className={styles.tagIcon}>></div>
            <div className={styles.tagTex}>{text}</div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default ProjectTag;
