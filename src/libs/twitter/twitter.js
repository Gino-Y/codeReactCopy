import styles from './twitter.less';
import React from 'react';
import { TwitterOutlined } from '@ant-design/icons';

const Twitter = ({ text, url, dates }) => {
    return (
        <div className={styles.twitter}>
            <div className={styles.twitterImg}>
                <TwitterOutlined />
            </div>
            <div className={styles.twitterText}>{text}</div>
            <div className={styles.twitterText}>{url}</div>
            <div className={styles.twitterTextLittle}>{dates}</div>
        </div>
    );
};
export default Twitter;
