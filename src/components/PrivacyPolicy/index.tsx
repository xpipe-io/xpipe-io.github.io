import styles from "./styles.module.css";
import React from "react"
// @ts-ignore
import Content from "!raw-loader!./content.html";

export const PrivacyPolicy = () => (
    <div className={styles.content} dangerouslySetInnerHTML={{ __html: Content }} />
)
export default PrivacyPolicy
