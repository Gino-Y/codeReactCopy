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

    const [testObject, setTestObject] = useState({
        name: 'lisi',
        age: 34,
        hobby: '足球',
    });

    const onClickTestObject = () => {
        let newTestObject = {
            ...testObject,
            name: 'wangwu',
        };
        newTestObject.age = testObject.age + 1;
        setTestObject(newTestObject);
    };

    const [objectArray, setObjectArray] = useState([
        {
            name: '张三',
            age: 23,
            hobby: '足球',
        },
        {
            name: '李四',
            age: 32,
            hobby: '足球',
        },
        {
            name: '王五',
            age: 25,
            hobby: '足球',
        },
    ]);
    const noClickObjectArray = () => {
        let newObjectArray = [...objectArray];
        newObjectArray[2].name = objectArray[2].name + 1;
        newObjectArray[2].age = objectArray[2].age + 1;
        setObjectArray(newObjectArray);
    };

    const [complexData, set] = useState([
        {
            name: '张三',
            age: 23,
            hobby: '足球',
            children: [
                {
                    name: '张三儿子',
                    sex: '男孩',
                },
            ],
            family: {
                name: '张三老婆',
                age: 32,
            },
        },
        {
            name: '李四',
            age: 32,
            hobby: '足球',
            children: [
                {
                    name: '李四儿子',
                    sex: '男孩',
                },
                {
                    name: '李四女儿',
                    sex: '女孩',
                },
            ],
            family: {
                name: '李四老婆',
                age: 31,
            },
        },
        {
            name: '王五',
            age: 25,
            hobby: '足球',
            children: [],
            family: {},
        },
    ]);

    const [boole, setBoole] = useState(false);

    const onClickBoole = () => {
        let newBoole = !boole;
        setBoole(newBoole);
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
                        <div
                            className={styles.firstBa}
                            onClick={onClickTestObject}
                        >
                            {testObject.name}
                            <br />
                            {testObject.age}
                            <br />
                            {testObject.hobby}
                            <br />
                        </div>
                        <div classname={styles.clear}></div>
                    </div>
                    <div className={styles.firstB} onClick={noClickObjectArray}>
                        {objectArray[2].name}
                        <br />
                        {objectArray[2].age}
                        <br />
                        {objectArray[2].hobby}
                        <br />
                    </div>
                    <div classname={styles.clear}></div>
                </div>
                <div className={styles.secondTow} onClick={onClickButtonArray}>
                    {array}
                </div>
                <div classname={styles.clear}></div>
            </div>
            <div className={styles.thirdLine}>
                <div className={styles.firstThree} onClick={onClickBoole}>
                    {boole.toString()}
                </div>
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
