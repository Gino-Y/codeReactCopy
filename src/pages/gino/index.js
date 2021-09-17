import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel } from 'antd';
import styles from './index.less';

const Gino = () => {
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.firstOne}></div>
                <div className={styles.secondOne}></div>
                <div className={styles.thirdOne}></div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.secondLine}>
                <div className={styles.firstTow}>
                    <div className={styles.firstA}>
                        <div className={styles.firstAa}></div>
                        <div className={styles.firstBa}></div>
                        <div classname={styles.clear}></div>
                    </div>
                    <div className={styles.firstB}></div>
                    <div classname={styles.clear}></div>
                </div>
                <div className={styles.secondTow}></div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.thirdLine}>
                <div className={styles.firstThree}></div>
                <div className={styles.secondThree}></div>
                <div classname={styles.clear}></div>
            </div>
            <div classname={styles.clear}></div>
        </div>
    );
};
export default Gino;
