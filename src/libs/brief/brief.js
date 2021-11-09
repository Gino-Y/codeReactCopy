import styles from './brief.less';
import girlxx04 from '../../image/girlxx04.png';
import React from 'react';

const Brief = () => {
    return (
        <div className={styles.projectBrief}>
            <div className={styles.tinyImg}>
                <img src={girlxx04} className={styles.tinyImg} />
            </div>
            <div className={styles.tinyTag}>
                拉力三又开始了，看看我们准备了什么？网页设计
            </div>
            <div className={styles.tinyDate}>Oct.10.2013</div>
            <div className={styles.tinyLike}>❤21</div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default Brief;
