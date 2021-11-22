import React from 'react';
import styles from './copyRightComponent.less';
import girlxx01 from '../../image/girlxx01.png';
import girlxx02 from '../../image/girlxx02.png';
import girlxx03 from '../../image/girlxx03.png';
import girlxx04 from '../../image/girlxx04.png';
import girlxx05 from '../../image/girlxx05.png';
import girlxx06 from '../../image/girlxx06.png';
import { TwitterOutlined } from '@ant-design/icons';
import Twitter from '../twitter/twitter.js';

const CopyRightComponent = () => {
    return (
        <div className={styles.other}>
            <div className={styles.bottomLift}>
                <div className={styles.bottomAboutUs}>关于我们</div>
                <div className={styles.bottomContent}>
                    目前已竣工并投入生产，占地面积达40000m2，厂房面积近15000m2。公司2004年的年产值达4350多万元，并且每年以平均30%的速度快速增长。目前，本公司的产品已具备国际及国内多项质量认证证书，并为知名家用电器企业：小天鹅电器有限公司、三星电子有限公司、海尔集团、惠尔普等配套生产各类标牌。
                </div>
                <div className={styles.bottomAboutUs}>作品欣赏</div>
                <div className={styles.photo}>
                    <div className={styles.photoChild}>
                        <img src={girlxx01} className={styles.girlImg} />
                    </div>
                    <div className={styles.photoChild}>
                        <img src={girlxx02} className={styles.girlImg} />
                    </div>
                    <div className={styles.photoChild}>
                        <img src={girlxx03} className={styles.girlImg} />
                    </div>
                    <div className={styles.photoChild}>
                        <img src={girlxx04} className={styles.girlImg} />
                    </div>
                    <div className={styles.photoChild}>
                        <img src={girlxx05} className={styles.girlImg} />
                    </div>
                    <div className={styles.photoChild}>
                        <img src={girlxx06} className={styles.girlImg} />
                    </div>
                </div>
                <div className={styles.clear}></div>
            </div>
            <div className={styles.bottomLift}>
                <div className={styles.bottomAboutUs}>来自推特的祝福</div>
                <div className={styles.twitterBox}>
                    <Twitter
                        text={"Check Out Dtbaker's"}
                        url={'http://t.co/WBFKIWHJ*/'}
                        dates={'3 days ago'}
                    />
                    <Twitter
                        text={"Check Out Dtbaker's"}
                        url={'http://t.co/WBFKIWHJ*/'}
                        dates={'4 days ago'}
                    />
                    <Twitter
                        text={"Check Out Dtbaker's"}
                        url={'http://t.co/WBFKIWHJ*/'}
                        dates={'5 days ago'}
                    />
                    <Twitter
                        text={"Check Out Dtbaker's"}
                        url={'http://t.co/WBFKIWHJ*/'}
                        dates={'6 days ago'}
                    />
                    <Twitter
                        text={"Check Out Dtbaker's"}
                        url={'http://t.co/WBFKIWHJ*/'}
                        dates={'7 days ago'}
                    />
                </div>
                <div className={styles.bottomAboutUs}>在右邊單位關注我</div>
                <div className={styles.clear}></div>
            </div>
            <div className={styles.bottomLift}>
                <div className={styles.bottomAboutUs}>来自推特的祝福</div>
                <div className={styles.twitterBox}>阿萨德</div>

                <div className={styles.clear}></div>
            </div>
        </div>
    );
};
export default CopyRightComponent;
