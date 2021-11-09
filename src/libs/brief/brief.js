import styles from './brief.less';
import React from 'react';

const Brief = ({ imgSrc, text, date, loveNumber }) => {
    return (
        <div className={styles.projectBrief}>
            <div className={styles.tinyImg}>
                <img src={imgSrc} className={styles.tinyImg} />
            </div>
            <div className={styles.tinyTag}>{text}</div>
            <div className={styles.tinyDate}>{date}</div>
            <div className={styles.tinyLike}>{loveNumber}</div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default Brief;
