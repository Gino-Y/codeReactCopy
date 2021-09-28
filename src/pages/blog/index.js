import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel } from 'antd';
import styles from './index.less';
import icon from '../../image/iconSkokov.png';
import blogImg from '../../image/blogImg.png';
import girlxx01 from '../../image/girlxx01.png';
import girlxx02 from '../../image/girlxx02.png';
import girlxx03 from '../../image/girlxx03.png';
import girlxx04 from '../../image/girlxx04.png';
import girlxx05 from '../../image/girlxx05.png';
import girlxx06 from '../../image/girlxx06.png';

const Blog = () => {
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
            <div className={styles.mainLine}>
                <div className={styles.mainBox}>
                    <div className={styles.explain}>
                        “这里的资源库虽然不大，虽然没有什么权威，但是都是些可以举一反三的致命素材”.
                        <div className={styles.littleFont}>John Wooden</div>
                    </div>
                    <div className={styles.blogBox}>
                        <img src={girlxx01} className={styles.girlxx01} />
                    </div>
                    <div className={styles.blogBox}>
                        <img src={girlxx02} className={styles.girlxx01} />
                    </div>
                    <div className={styles.blogBox}>
                        <img src={girlxx03} className={styles.girlxx01} />
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.blogBoxT2}>
                        <img src={girlxx04} className={styles.girlxx01} />
                    </div>
                    <div className={styles.blogBox}>
                        <img src={girlxx05} className={styles.girlxx01} />
                    </div>
                    <div className={styles.blogBox}>
                        <img src={girlxx06} className={styles.girlxx01} />
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.search}></div>
                <div className={styles.suggest}></div>
                <div className={styles.suggest}></div>
                <div className={styles.label}></div>
                <div className={styles.clear}></div>
            </div>
            <div classname={styles.clear}></div>
        </div>
    );
};
export default Blog;
