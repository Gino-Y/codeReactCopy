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
import img01 from '../../image/imgC01.jpg';
import img02 from '../../image/imgC02.jpg';
import img03 from '../../image/imgC03.jpg';
import girlxx03 from '../../image/girlxx03.png';
import CopyRightComponent from '../../libs/copyRightComponent/copyRightComponent';
import BlogHead from '../../libs/blogHead/blogHead';
import girlxx02 from '../../image/girlxx02.png';
import BlogRole from '../../libs/blogRole/blogRole';

const Blog03 = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className={styles.global}>
            <BlogHead />
            <div className={styles.secondLine}>
                <div className={styles.secondLineInter}>
                    <BlogRole img={girlxx03} name={'Luna'} job={'designer'} />
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
                    <Avatar size={64} icon={<UserOutlined />} src={girlxx03} />
                </Divider>
            </div>
            <CopyRightComponent />
            {/*<div className={styles.seventhLine}></div>*/}
            {/*<div className={styles.other}></div>*/}
            {/*<div className={styles.endLine}></div>*/}
        </div>
    );
};
export default Blog03;
