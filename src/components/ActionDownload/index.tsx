import styles from "./styles.module.css";
import ActionCard from "../ActionCard"
import React from "react"
// @ts-ignore
import BashScript from "./bash-script.mdx";
import Homebrew from "./homebrew.mdx";
import MDXContent from '@theme/MDXContent';

export const ActionDownload = () => (
    <div className={styles.cards}>
        <div className="container">
            <div className="row">
                <ActionCard
                    icon={
                        <img width="80px" src="/img/install-setup-product-icon.svg"/>
                    }
                    title="Installer"
                    description="Installers handle the setup out of the box.
With installers you can also make use of the optional auto-update functionality."
                >
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-installer-windows-x86_64.msi">
                        &gt;&nbsp;&nbsp;Windows .msi installer (x86_64)
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-installer-linux-x86_64.deb">
                        &gt;&nbsp;&nbsp;Linux .deb installer (x86_64)
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-installer-linux-x86_64.rpm">
                        &gt;&nbsp;&nbsp;Linux .rpm installer (x86_64)
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-installer-macos-x86_64.pkg">
                        &gt;&nbsp;&nbsp;MacOS .pkg installer (x86_64)
                    </a>
                </ActionCard>

                <ActionCard
                    title="Portable Installation"
                    description="Portable archives can be unpacked anywhere you like but require some extra work such as environment variable setup.
There is also no autoupdate functionality included."
                    icon={
                        <img src="/img/portable.svg" width="80px"/>
                    }
                >
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-portable-windows-x86_64.zip">
                        &gt;&nbsp;&nbsp;Windows .zip archive (x86_64)
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-portable-linux-x86_64.tar.gz">
                        &gt;&nbsp;&nbsp;Linux .tar.gz archive (x86_64)
                    </a>
                    <a className={styles.card__link}
                       href="https://github.com/xpipe-io/xpipe/releases/latest/download/xpipe-portable-macos-x86_64.dmg">
                        &gt;&nbsp;&nbsp;MacOS .dmg archive (x86_64)
                    </a>
                </ActionCard>
            </div>
        <br/>
            <div className="row">

                <ActionCard
                    title="Installer Script"
                    description="Install X-Pipe by pasting the applicable installation command into your terminal.
            This will perform the full set up similarly to the downloadable installers."
                    icon={
                        <img src="/img/script.svg" width="80px"/>
                    }
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

                <ActionCard
                    title="Package Managers"
                    description="Install X-Pipe through a package manager of your choice. All updates will also be handled by that package manager."
                    icon={
                        <img src="/img/package.svg" width="80px"/>
                    }
                >
                    <div>
                        <h4>Homebrew</h4>
                        <MDXContent>
                            <Homebrew/>
                        </MDXContent>
                    </div>
                </ActionCard>
            </div>
        </div>
    </div>
)
export default ActionDownload
