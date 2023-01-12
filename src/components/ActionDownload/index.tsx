import styles from "./styles.module.css";
import ActionCard from "../ActionCard"
import React from "react"
import BashScript from "./bash-script.mdx";
import MDXContent from '@theme/MDXContent';

export const ActionDownload = () => (
    <div className={styles.cards}>
        <div className="container">
            <div className="row">
                <ActionCard
                    icon={
                        <img width="80px" src="/img/install-setup-product-icon.svg"/>
                    }
                    title="Installers"
                    description="Installers handle the setup out of the box.
With the installer you can also make use of the optional autoupdate functionality."
                >
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-installer-windows.msi">
                        Windows .msi Installer&nbsp;&nbsp;&gt;
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-installer-linux.deb">
                        Linux .deb Installer&nbsp;&nbsp;&gt;
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-installer-linux.rpm">
                        Linux .rpm Installer&nbsp;&nbsp;&gt;
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-installer-mac.pkg">
                        MacOS .pkg Installer&nbsp;&nbsp;&gt;
                    </a>
                </ActionCard>

                <ActionCard
                    title="Portable Installations"
                    description="Portable archives can be unpacked anywhere you like but require some extra work such as environment variable setup.
There is also no autoupdate functionality included."
                    icon={
                        <img src="/img/portable.svg" width="80px"/>
                    }
                    skin="primary"
                >
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-portable-windows.zip">
                        Windows .zip archive &nbsp;&nbsp;&gt;
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-portable-linux.tar.gz">
                        Linux .tar.gz archive &nbsp;&nbsp;&gt;
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe-app/releases/latest/download/xpipe-portable-mac.dmg">
                        MacOS .dmg archive &nbsp;&nbsp;&gt;
                    </a>
                </ActionCard>

                <ActionCard
                    title="Installer Script"
                    description="Install X-Pipe by pasting the applicable installation command into your terminal.
            This will perform the full set up similarly to the downloadable installers."
                    icon={
                        <img src="/img/script.svg" width="80px"/>
                    }
                    skin="primary"
                >
                    <div>
                        <h5>Bash (Linux / MacOS)</h5>
                        <MDXContent>
                            <BashScript/>
                        </MDXContent>
                    </div>
                    {/*<div>*/}
                    {/*    <h5>PowerShell (Windows)</h5>*/}
                    {/*    <MDXContent>*/}
                    {/*        <PwshScript/>*/}
                    {/*    </MDXContent>*/}
                    {/*</div>*/}
                </ActionCard>
            </div>
        </div>
    </div>
)
export default ActionDownload
