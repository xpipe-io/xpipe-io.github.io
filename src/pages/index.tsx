import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';

import styles from './index.module.css';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Build performant, native and cross-platform desktop applications with Vue 🚀">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img src="/img/logo_large.svg"/>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </header>
            <main className={styles.content}>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className={classnames("col col--6", styles.imgColumn)}>
                            <img src="/img/stores.png" className={styles.demoImg}/>
                        </div>
                        <div className="col col--6">
                            <h3>Connection Explorer</h3>
                            <ul>
                                <li>Allows you to easily create and manage all kinds of remote connections to normal servers, database
                                    servers, and more
                                </li>
                                <li>Supports established protocols (e.g. SSH and more) out of the box and also supports any custom connection
                                    methods that work through the command-line
                                </li>
                                <li>Is able to integrate any kind of proxies into the connection process, even ones with different
                                    protocols.
                                </li>
                                <li>Securely stores all information exclusively on your computer and encrypts all secret
                                    information
                                </li>
                                <li>Allows you to easily share connections and their information with anyone and any
                                    other trusted system in your network
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>Instantly launch remote shells and commands</h3>
                            <ul>
                                <li>Automatically login into a remote shell in your favourite terminal with one click (no need
                                    to fill password prompts, etc.)
                                </li>
                                <li>Supports all kinds of local and remote shells. This includes command shells (e.g. bash, PowerShell,
                                    cmd, etc.) and database shells (e.g. PSQL Shell)
                                </li>
                                <li>Seamlessly integrates with all commonly used terminals on Windows, MacOS, and Linux</li>
                                <li>Exclusively uses established CLI tools and therefore works out of the box on most
                                    systems and doesn't require any additional setup
                                </li>
                            </ul>
                        </div>
                        <div className={classnames("col col--6", styles.imgColumn)}>
                            <img src="/img/stores.png" className={styles.demoImg}/>
                        </div>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className={classnames("col col--6", styles.imgColumn)}>
                            <img src="/img/stores.png" className={styles.demoImg}/>
                        </div>
                        <div className="col col--6">
                            <h3>High Level Data Explorer</h3>
                            <ul>
                                <li>Work with your data on a higher level, allowing for a workflow that is independent of the underlying data format
                                </li>
                                <li>The advanced auto detection of X-Pipe saves you a lot of time when working with data sources
                                    as you don't have to worry about encodings, format configurations, and more
                                </li>
                                <li>Effortlessly import, export, and convert different data representations and formats
                                </li>
                                <li>Access your data sources from the command-line using the X-Pipe CLI or
                                    your favorite programming languages using the X-Pipe API
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
