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
import {
    SearchOutlined,
    UserOutlined,
    createFromIconfontCN,
    SettingOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import icon from '../../image/iconSkokov.png';
import img01 from '../../image/img01.png';
import img02 from '../../image/img02.png';
import img03 from '../../image/img03.png';
import girlxx01 from '../../image/girlxx01.png';

import imgJnb01 from '../../image/imgJnb01.png';

const Product = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
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
            <div className={styles.thirdLine}>
                <div className={styles.imgBackground}>
                    <img src={imgJnb01} className={styles.img} />
                </div>
            </div>
            <div className={styles.imgTop}>
                <div className={styles.text}>
                    <div className={styles.textIcon}>
                        <SettingOutlined className={styles.iconImage} />
                    </div>
                    <div className={styles.textTitle}>
                        FWERWEFSDFSDGERTERTSDGGDFG
                    </div>
                    <div className={styles.textContent}>
                        lsdjflsajkfueha,mncvhiurhdkhjawfsldjlfjasiwoijefodsaofji
                        wejofjwoeifjwoefweifjwoeifjwoeif jwofsdahahfweua
                    </div>
                </div>
                <div className={styles.text}></div>
                <div className={styles.text}></div>
            </div>
            <div className={styles.fourthLine}></div>
            <div className={styles.fifthLine}></div>
            <div className={styles.sixthLine}></div>
            {/*<div className={styles.seventhLine}></div>*/}
            {/*<div className={styles.Other}></div>*/}
            {/*<div className={styles.endLine}></div>*/}
        </div>
    );
};
export default Product;
