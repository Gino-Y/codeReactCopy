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
import icon from '../../image/iconSkokov.png';
import blogImg from '../../image/blogImg.png';
import girlxx01 from '../../image/girlxx01.png';
import girlxx02 from '../../image/girlxx02.png';
import girlxx03 from '../../image/girlxx03.png';
import girlxx04 from '../../image/girlxx04.png';
import girlxx05 from '../../image/girlxx05.png';
import girlxx06 from '../../image/girlxx06.png';
import CopyRightComponent from '../../libs/copyRightComponent/copyRightComponent.js';

const Home = () => {
    const teamMenu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    产品
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    研发
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    市场
                </a>
            </Menu.Item>
        </Menu>
    );
    const blogsMenu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    博客1
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    博客2
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    博客3
                </a>
            </Menu.Item>
        </Menu>
    );
    const aboutUsMenu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    关于我们
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    企业文化
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    招贤纳士
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.firstImgOuter}>
                    <img src={icon} className={styles.iconSkokov} />
                </div>

                <div className={styles.firstTow}>
                    <div className={styles.homePage}>首页</div>
                    <div className={styles.team}>
                        <Dropdown overlay={teamMenu} placement="bottomCenter">
                            <Button className={styles.buttenStyle} type="text">
                                团队
                            </Button>
                        </Dropdown>
                    </div>
                    <div className={styles.blogs}>
                        <Dropdown overlay={blogsMenu} placement="bottomCenter">
                            <Button className={styles.buttenStyle} type="text">
                                博客
                            </Button>
                        </Dropdown>
                    </div>
                    <div className={styles.aboutUs}>
                        <Dropdown
                            overlay={aboutUsMenu}
                            placement="bottomCenter"
                        >
                            <Button className={styles.buttenStyle} type="text">
                                关于我们
                            </Button>
                        </Dropdown>
                    </div>
                    <div className={styles.aboutUs}>
                        <Button className={styles.buttenStyle} type="text">
                            联系我们
                        </Button>
                    </div>
                </div>
                <div className={styles.clear}></div>
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
                            <div className={styles.clear}></div>
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
                            <div className={styles.clear}></div>
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
                            <div className={styles.clear}></div>
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
                            <div className={styles.clear}></div>
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
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>
                            SKOKOV制作的顺应企业的主题
                        </div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>网页设计</div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>
                            IE浏览器、火狐浏览器、谷歌浏览器
                        </div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>
                            WORDPRESS 3.5、WORDPRESS 3.6
                        </div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>客户效应</div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>商标效应</div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>独特的ICONS</div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.tagContent}>
                        <div className={styles.tagIcon}>></div>
                        <div className={styles.tagTex}>预期目标</div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.suggest}>
                    <div className={styles.tag}>受欢迎的项目案例</div>
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
                    <div className={styles.projectBrief}>
                        <div className={styles.tinyImg}>
                            <img src={girlxx02} className={styles.tinyImg} />
                        </div>
                        <div className={styles.tinyTag}>
                            拉力三又开始了，看看我们准备了什么？网页设计
                        </div>
                        <div className={styles.tinyDate}>Oct.10.2013</div>
                        <div className={styles.tinyLike}>❤21</div>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={styles.projectBrief}>
                        <div className={styles.tinyImg}>
                            <img src={girlxx03} className={styles.tinyImg} />
                        </div>
                        <div className={styles.tinyTag}>
                            拉力三又开始了，看看我们准备了什么？网页设计
                        </div>
                        <div className={styles.tinyDate}>Oct.10.2013</div>
                        <div className={styles.tinyLike}>❤21</div>
                        <div className={styles.clear}></div>
                    </div>
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
                    <div className={styles.projectBrief}>
                        <div className={styles.tinyImg}>
                            <img src={girlxx05} className={styles.tinyImg} />
                        </div>
                        <div className={styles.tinyTag}>
                            拉力三又开始了，看看我们准备了什么？网页设计
                        </div>
                        <div className={styles.tinyDate}>Oct.10.2013</div>
                        <div className={styles.tinyLike}>❤21</div>
                        <div className={styles.clear}></div>
                    </div>
                </div>
                <div className={styles.label}>
                    <div className={styles.tag}>标签</div>
                </div>
                <div className={styles.clear}></div>
            </div>
            <div className={styles.catalog}>
                <div className={styles.pageUp}>上一页</div>
                <div className={styles.pageNumberOne}>1</div>
                <div className={styles.pageNumber}>2</div>
                <div className={styles.pageNumber}>3</div>
                <div className={styles.pageNumber}>4</div>
                <div className={styles.pageNumber}>5</div>
                <div className={styles.pageNumber}>...</div>
                <div className={styles.pageNumber}>19</div>
                <div className={styles.pageNumber}>20</div>
                <div className={styles.pageDown}>下一页</div>
                <div className={styles.clear}></div>
            </div>

            {/*<div className={styles.other}>*/}
            {/*    <div className={styles.bottomLift}>*/}
            {/*        <div className={styles.bottomAboutUs}>关于我们</div>*/}
            {/*        <div className={styles.bottomContent}>*/}
            {/*            近日，朝阳公安分局接群众举报称，有人在朝阳某小区卖淫嫖娼。对此，警方依法开展调查，将卖淫违法人员陈某卉（女，29岁），嫖娼违法人员李某迪（男，39岁）查获。经审查，上述人员对违法事实供认不讳，目前均已被朝阳公安分局依法行政拘留。*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <CopyRightComponent />
            <div className={styles.endLine}></div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default Home;
