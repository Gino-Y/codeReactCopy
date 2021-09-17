import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel } from 'antd';
import styles from './index.less';

const Gino = () => {
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.first}></div>
                <div className={styles.second}></div>
                <div className={styles.third}></div>
                <div className={styles.clear}></div>
            </div>
            <div className={styles.secondLine}></div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default Gino;
