import React from 'react';
import styles from './blogRole.less';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const BlogRole = ({ img, name, job }) => {
    return (
        <div className={styles.box}>
            <div className={styles.avatar}>
                <Avatar size={64} icon={<UserOutlined />} src={img} />
            </div>
            <div className={styles.nameJob}>
                <div className={styles.name}>{name}</div>
                <div className={styles.job}>{job}</div>
            </div>
        </div>
    );
};
export default BlogRole;
