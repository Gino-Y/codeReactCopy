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
    const [test, setTest] = useState([
        {
            name: '张三',
            age: 12,
            hobby: '足球',
        },
        {
            name: '李四',
            age: 34,
            hobby: '篮球',
        },
        {
            name: '王五',
            age: 56,
            hobby: '乒乓球',
        },
    ]);

    // const [test, setTest] = useState([{
    //     name: '张三',
    //     age: 12,
    //     hobby: '足球',
    // },{
    //     name: '王五',
    //     age: 56,
    //     hobby: '乒乓球',
    // },{
    //     name: '李四',
    //     age: 34,
    //     hobby: '篮球',
    // }]);
    // 必须用splice方法
    const onClickTest = () => {
        let newTest = [...test];
        let item = {
            ...test[1],
        };
        //newTest = [test[0],test[2],test[1]];
        newTest.splice(1, 1);
        newTest.push(item);
        setTest(newTest);
    };

    return (
        <div className={styles.global} onClick={onClickTest}>
            {test[1].name}
            <br />
            {test[1].age}
            <br />
            {test[1].hobby}
            <br />
            <div className={styles.button}></div>
            <div className={styles.clear}></div>
        </div>
    );
};
export default User;
