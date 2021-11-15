import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel, Checkbox } from 'antd';
import styles from './index.less';
import icon from '../../image/iconSkokov.png';
import blogImg from '../../image/blogImg.png';
import girlxx01 from '../../image/girlxx01.png';
import girlxx02 from '../../image/girlxx02.png';
import girlxx03 from '../../image/girlxx03.png';
import girlxx04 from '../../image/girlxx04.png';
import girlxx05 from '../../image/girlxx05.png';
import girlxx06 from '../../image/girlxx06.png';

const User = () => {
    const [test, setTest] = useState({
        name: 'lisi',
        age: 34,
        children: [
            {
                name: '张三儿子',
                age: 12,
                hobby: '足球',
            },
            {
                name: '张三女儿',
                age: 13,
                hobby: '篮球',
            },
        ],
    });

    return (
        <div className={styles.global}>
            {test.age}
            <div className={styles.button}></div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default User;
