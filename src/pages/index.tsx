import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';

import styles from './index.module.css';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`X-Pipe`}
            description="Next level remote data workflows for everyone">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img src="/img/logo_large.svg"/>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </header>
            <main className={styles.content}>
                <section>
                    <div className={classnames("row", styles.descriptionRow)}>
                            <img src="/img/stores.png" className={styles.demoImg}/>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>A smart connection manager</h3>
                            <ul>
                                <li>Allows you to easily create and manage all kinds of remote connections to normal
                                    servers, database
                                    servers, and more
                                </li>
                                <li>Exclusively uses established CLI tools and therefore works out of the box on most
                                    systems and doesn't require any additional setup
                                </li>
                                <li>Is able to integrate any kind of proxies into the connection process, even ones with
                                    different
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
                        <div className="col col--6">
                            <h3>Instantly launch remote shells and commands</h3>
                            <ul>
                                <li>Automatically login into a remote shell in your favourite terminal with one click
                                    (no need
                                    to fill password prompts, etc.)
                                </li>
                                <li>Supports all kinds of local and remote shells. This includes command shells (e.g.
                                    bash, PowerShell,
                                    cmd, etc.) and database shells (e.g. PSQL Shell)
                                </li>
                                <li>Seamlessly integrates with all commonly used terminals on Windows, MacOS, and
                                    Linux
                                </li>
                            </ul>
                        </div>
                        <div className={classnames("col col--6", styles.imgColumn)}>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={classnames("row", styles.descriptionRow)}>
                            <img src="/img/browser.png" className={styles.demoImg}/>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>Remote file explorer</h3>
                            <ul>
                                <li>Easily access files on any remote system
                                </li>
                                <li>Seamlessly transfer files across remote system boundaries
                                </li>
                                <li>Open a terminal in any directory with one click
                                </li>
                                <li>Execute programs and commands from the explorer interface
                                </li>
                                <li>Utilize your favourite tools to open and edit remote files
                                </li>
                            </ul>
                        </div>
                        <div className="col col--6">
                            <h3>A simple yet powerful platform</h3>
                            <ul>
                                <li>Free and open source software
                                </li>
                                <li>No registration or account needed
                                </li>
                                <li>Available for all major operating systems
                                </li>
                                <li>Exhaustive extension API allows anyone to develop
                                    extensions
                                </li>
                                <li>The X-Pipe beacon API enables communication with other applications
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
