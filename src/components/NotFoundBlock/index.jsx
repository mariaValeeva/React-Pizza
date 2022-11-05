import React from "react";

import styles from "./NotFoundBlock.modules.scss";

console.log(styles);

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
        <h1>
                    <span>😕 </span>
                    <br />
                Ничего не найдено
            </h1>
            <p>К сожалению страница отсутствует</p>
            </div>
                
    )
}

export default NotFoundBlock;