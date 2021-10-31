import React from 'react';
import styles from './copyRightComponent.less';

const CopyRightComponent = () => {
    return (
        <div className={styles.other}>
            <div className={styles.bottomLift}>
                <div className={styles.bottomAboutUs}>关于我们</div>
                <div className={styles.bottomContent}>
                    近日，朝阳公安分局接群众举报称，有人在朝阳某小区卖淫嫖娼。对此，警方依法开展调查，将卖淫违法人员陈某卉（女，29岁），嫖娼违法人员李某迪（男，39岁）查获。经审查，上述人员对违法事实供认不讳，目前均已被朝阳公安分局依法行政拘留。
                </div>
            </div>
        </div>
    );
};
export default CopyRightComponent;
