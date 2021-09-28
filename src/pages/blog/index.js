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
                        <div className={styles.imgBox}>
                            <img src={girlxx01} className={styles.girlImg} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                令人鼓舞的动感体验！发自内心的飘逸~
                                <br />
                                平面设计
                            </div>
                            <div className={styles.introductionOne}>
                                When it comes to parallax scrolling,the that
                                separates good and bad choices is pretty thin. A
                                while back parallax was being used to deliver an
                                explosion of ilimints floating around the
                                screen.
                            </div>
                        </div>
                        <div className={styles.like}>❤ 15</div>
                        <div className={styles.info}>
                            by John Doe / 4 comments / Oct. 12. 2013
                        </div>
                        <div className={styles.clear}></div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.blogBox}>
                        <div className={styles.imgBox}>
                            <img src={girlxx02} className={styles.girlImg} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                令人鼓舞的动感体验！发自内心的飘逸~
                                <br />
                                平面设计
                            </div>
                            <div className={styles.introductionOne}>
                                When it comes to parallax scrolling,the that
                                separates good and bad choices is pretty thin. A
                                while back parallax was being used to deliver an
                                explosion of ilimints floating around the
                                screen.
                            </div>
                        </div>
                        <div className={styles.like}>❤ 15</div>
                        <div className={styles.info}>
                            by John Doe / 4 comments / Oct. 12. 2013
                        </div>
                        <div className={styles.clear}></div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.blogBox}>
                        <div className={styles.imgBox}>
                            <img src={girlxx03} className={styles.girlImg} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                令人鼓舞的动感体验！发自内心的飘逸~
                                <br />
                                平面设计
                            </div>
                            <div className={styles.introductionOne}>
                                When it comes to parallax scrolling,the that
                                separates good and bad choices is pretty thin. A
                                while back parallax was being used to deliver an
                                explosion of ilimints floating around the
                                screen.
                            </div>
                        </div>
                        <div className={styles.like}>❤ 15</div>
                        <div className={styles.info}>
                            by John Doe / 4 comments / Oct. 12. 2013
                        </div>
                        <div className={styles.clear}></div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.blogBoxT2}>
                        <div className={styles.imgBox}>
                            <img src={girlxx04} className={styles.girlImg} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                令人鼓舞的动感体验！发自内心的飘逸~
                                <br />
                                平面设计
                            </div>
                            <div className={styles.introductionOne}>
                                When it comes to parallax scrolling,the that
                                separates good and bad choices is pretty thin. A
                                while back parallax was being used to deliver an
                                explosion of ilimints floating around the
                                screen.
                            </div>
                        </div>
                        <div className={styles.like}>❤ 15</div>
                        <div className={styles.info}>
                            by John Doe / 4 comments / Oct. 12. 2013
                        </div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.blogBox}>
                        <div className={styles.imgBox}>
                            <img src={girlxx05} className={styles.girlImg} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                令人鼓舞的动感体验！发自内心的飘逸~
                                <br />
                                平面设计
                            </div>
                            <div className={styles.introductionOne}>
                                When it comes to parallax scrolling,the that
                                separates good and bad choices is pretty thin. A
                                while back parallax was being used to deliver an
                                explosion of ilimints floating around the
                                screen.
                            </div>
                        </div>
                        <div className={styles.like}>❤ 15</div>
                        <div className={styles.info}>
                            by John Doe / 4 comments / Oct. 12. 2013
                        </div>
                        <div className={styles.clear}></div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.blogBox}>
                        <div className={styles.imgBox}>
                            <img src={girlxx06} className={styles.girlImg} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                令人鼓舞的动感体验！发自内心的飘逸~
                                <br />
                                平面设计
                            </div>
                            <div className={styles.introductionOne}>
                                When it comes to parallax scrolling,the that
                                separates good and bad choices is pretty thin. A
                                while back parallax was being used to deliver an
                                explosion of ilimints floating around the
                                screen.
                            </div>
                        </div>
                        <div className={styles.like}>❤ 15</div>
                        <div className={styles.info}>
                            by John Doe / 4 comments / Oct. 12. 2013
                        </div>
                        <div className={styles.clear}></div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.search}></div>
                <div className={styles.suggest}>
                    <div className={styles.tag}>项目计划</div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>2016年11月22号</div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>
                            SKOKOV制作的顺应企业的主题
                        </div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>网页设计</div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>
                            IE浏览器、火狐浏览器、谷歌浏览器
                        </div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>
                            WORDPRESS 3.5、WORDPRESS 3.6
                        </div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>客户效应</div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>商标效应</div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>独特的ICONS</div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>预期目标</div>
                    </div>
                </div>
                <div className={styles.suggest}></div>
                <div className={styles.label}></div>
                <div className={styles.clear}></div>
            </div>
            <div classname={styles.clear}></div>
        </div>
    );
};
export default Blog;