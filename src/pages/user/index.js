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
    const [test, setTest] = useState(false);

    const onClickTest = () => {
        let newTest = !test;
        setTest(newTest);
    };

    return (
        <div className={styles.global} onClick={onClickTest}>
            {test.toString()}

            <div className={styles.clear}></div>
        </div>
    );
};
export default User;
