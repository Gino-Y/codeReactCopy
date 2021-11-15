import React, { useCallback, useMomo, useState } from 'react';
import { Button, Tooltip, Radio, Input, Space, Carousel } from 'antd';
import styles from './index.less';

const Gino = () => {
    const [test, setTest] = useState(0);
    const onClickButton = () => {
        let newTest = test + 1;
        setTest(newTest);
    };
    const [str, setStr] = useState('a');
    const onClickButtonStr = () => {
        let newStr = str + 'a';
        setStr(newStr);
    };
    const [array, setArray] = useState([]);
    const onClickButtonArray = () => {
        let newArray = [...array];
        newArray.push('a');
        setArray(newArray);
    };
    return (
        <div className={styles.global}>
            <div className={styles.firstLine}>
                <div className={styles.firstOne} onClick={onClickButton}>
                    {test}
                </div>
                <div className={styles.secondOne} onClick={onClickButtonStr}>
                    {str}
                </div>
                <div className={styles.thirdOne}></div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.secondLine}>
                <div className={styles.firstTow}>
                    <div className={styles.firstA}>
                        <div
                            className={styles.firstAa}
                            onClick={onClickButtonArray}
                        >
                            {array}
                        </div>
                        <div className={styles.firstBa}></div>
                        <div classname={styles.clear}></div>
                    </div>
                    <div className={styles.firstB}></div>
                    <div classname={styles.clear}></div>
                </div>
                <div className={styles.secondTow} onClick={onClickButtonArray}>
                    {array}
                </div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.thirdLine}>
                <div className={styles.firstThree}></div>
                <div className={styles.secondThree}></div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.clear} />
            <div className={styles.lastLine}>
                <div className={styles.lastOne}>hello world 你好世界</div>
                <div classname={styles.clear}></div>
            </div>
            <div classname={styles.clear}></div>
        </div>
    );
};
export default Gino;
