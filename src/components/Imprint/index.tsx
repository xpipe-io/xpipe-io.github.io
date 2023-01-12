import styles from "./styles.module.css";
import React from "react"
// @ts-ignore
import Content from "!raw-loader!./content.html";

export const Imprint = () => (
    <div className={styles.content} dangerouslySetInnerHTML={{ __html: Content }} />
)
export default Imprint
