import React, { useCallback, useMomo, useState } from 'react';
import {
    Button,
    Tooltip,
    Radio,
    Input,
    Space,
    Carousel,
    Checkbox,
    Menu,
    Dropdown,
} from 'antd';
import styles from './index.less';

const Blog = () => {
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}></div>
            <div className={styles.secondLine}></div>
            <div className={styles.thirdLine}></div>
            <div className={styles.fourthLine}></div>
            <div className={styles.fifthLine}></div>
            <div className={styles.sixthLine}></div>
            <div className={styles.seventhLine}></div>
            <div className={styles.Other}></div>
            <div className={styles.endLine}></div>
        </div>
    );
};
export default Blog;
