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
    Avatar,
    Divider,
} from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import icon from '../../image/iconSkokov.png';
import img01 from '../../image/img01.png';
import img02 from '../../image/img02.png';
import img03 from '../../image/img03.png';
import girlxx01 from '../../image/girlxx01.png';

const Blog01 = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
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
            <div className={styles.secondLine}>
                <div className={styles.secondLineInter}>
                    <div className={styles.avatar}>
                        <Avatar
                            size={64}
                            icon={<UserOutlined />}
                            src={girlxx01}
                        />
                    </div>
                    <div className={styles.nameJob}>
                        <div className={styles.name}>Gino</div>
                        <div className={styles.job}>designer</div>
                    </div>
                    <div className={styles.buttonRight}>
                        <div className={styles.buttonOuter}>
                            <Button type={'dashed'}>收藏</Button>
                        </div>
                        <div className={styles.buttonOuter}>
                            <Button type={'dashed'}>❤喜欢</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.thirdLine}>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>
                            <div className={styles.imgBox}>
                                <img src={img01} className={styles.img} />
                            </div>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <div className={styles.imgBox}>
                                <img src={img02} className={styles.img} />
                            </div>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <div className={styles.imgBox}>
                                <img src={img03} className={styles.img} />
                            </div>
                        </h3>
                    </div>
                </Carousel>
            </div>
            <div className={styles.fourthLine}>
                <div>Introduction</div>
                <div>
                    In the process of internal desktop applications development,
                    many different design specs and implementations would be
                    involved, which might cause designers and developers
                    difficulties and duplication and reduce the efficiency of
                    development. After massive project practice and summaries,
                    Ant Design, a design language for background applications,
                    is refined by Ant UED Team, which aims to uniform the user
                    interface specs for internal background projects, lower the
                    unnecessary cost of design differences and implementation
                    and liberate the resources of design and front-end
                    development.
                </div>
            </div>
            <div className={styles.fifthLine}>
                <Divider>
                    <Avatar size={64} icon={<UserOutlined />} src={girlxx01} />
                </Divider>
            </div>
            <div className={styles.sixthLine}></div>
            {/*<div className={styles.seventhLine}></div>*/}
            {/*<div className={styles.Other}></div>*/}
            {/*<div className={styles.endLine}></div>*/}
        </div>
    );
};
export default Blog01;
