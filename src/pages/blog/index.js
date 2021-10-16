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
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
import icon from '../../image/iconSkokov.png';

const Blog = () => {
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.iconOuter}>
                    <img src={icon} className={styles.iconSkokov} />
                </div>
                <div className={styles.buttonLeft}>
                    <div className={styles.buttonOuter}>
                        <Button type="text">灵感</Button>
                    </div>
                    <div className={styles.buttonOuter}>
                        <Button type="text">学习</Button>
                    </div>
                    <div className={styles.buttonOuter}>
                        <Button type="text">应聘</Button>
                    </div>
                </div>
                <div className={styles.buttonRight}>
                    <div className={styles.buttonOuter}>
                        <Tooltip title="search">
                            <Button
                                shape="circle"
                                icon={<SearchOutlined />}
                                size="large"
                            />
                        </Tooltip>
                    </div>
                    <div className={styles.buttonOuter}>
                        <Button type="text">登陆</Button>
                    </div>
                    <div className={styles.buttonOuter}>
                        <Button type="primary">注册</Button>
                    </div>
                </div>
            </div>
            {/*<div className={styles.secondLine}></div>*/}
            {/*<div className={styles.thirdLine}></div>*/}
            {/*<div className={styles.fourthLine}></div>*/}
            {/*<div className={styles.fifthLine}></div>*/}
            {/*<div className={styles.sixthLine}></div>*/}
            {/*<div className={styles.seventhLine}></div>*/}
            {/*<div className={styles.Other}></div>*/}
            {/*<div className={styles.endLine}></div>*/}
        </div>
    );
};
export default Blog;
