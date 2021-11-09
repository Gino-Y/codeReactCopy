import React from 'react';
import styles from './blogBox.less';
import girlxx01 from '../../image/girlxx01.png';

const BlogBox = ({
    img,
    textTop,
    occupation,
    textContent,
    loveNumber,
    date,
}) => {
    return (
        <div className={styles.blogBox}>
            <div className={styles.imgBox}>
                <img src={img} className={styles.girlImg} />
            </div>
            <div className={styles.content}>
                <div className={styles.introduction}>
                    {textTop}
                    <br />
                    {occupation}
                </div>
                <div className={styles.introductionOne}>{textContent}</div>
            </div>
            <div className={styles.like}>{loveNumber}</div>
            <div className={styles.info}>{date}</div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default BlogBox;
