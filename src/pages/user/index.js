import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel } from 'antd';
import styles from './index.less';

const User = () => {
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.first}>u0989080士大夫</div>
                <div className={styles.second}>有人提议5345345hherhh</div>
                <div className={styles.third}>34534gsgdfgd</div>
                <div className={styles.clear}></div>
            </div>
            <div className={styles.secondLine}></div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default User;
