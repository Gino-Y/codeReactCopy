import React from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './blogHead.less';
import icon from '../../image/iconSkokov.png';

const BlogHead = () => {
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
        </div>
    );
};
export default BlogHead;
