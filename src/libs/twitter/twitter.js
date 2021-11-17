import styles from './twitter.less';
import React from 'react';
import { TwitterOutlined } from '@ant-design/icons';

const Twitter = ({ imgSrc, text, date, loveNumber }) => {
    return (
        <div className={styles.twitter}>
            <div className={styles.twitterImg}>
                <TwitterOutlined />
            </div>
            <div className={styles.twitterText}>Check Out Dtbaker's</div>
            <div className={styles.twitterText}>http://t.co/WBFKIWHJ</div>
            <div className={styles.twitterTextLittle}>3 days ago</div>
        </div>
    );
};
export default Twitter;
