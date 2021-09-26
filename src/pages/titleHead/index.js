import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel } from 'antd';
import styles from './index.less';
import icon from '../../image/iconSkokov.png';
import blogImg from '../../image/blogImg.png';

const TitleHead = () => {
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.firstImgOuter}>
                    <img src={icon} className={styles.iconSkokov} />
                </div>

                <div className={styles.firstTow}>
                    <div className={styles.homePage}>首页</div>
                    <div className={styles.team}>团队</div>
                    <div className={styles.blogs}>博客</div>
                    <div className={styles.aboutUs}>关于我们</div>
                    <div className={styles.aboutUs}>关于我们</div>
                </div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.secondLine}>
                <img src={blogImg} className={styles.blogImg} />
            </div>
            <div classname={styles.clear}></div>
        </div>
    );
};
export default TitleHead;
