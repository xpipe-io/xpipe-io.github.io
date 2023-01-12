import clsx from "clsx"
import React from "react"

import style from "./styles.module.css"

type Props = {
    title: React.ReactNode
    description: React.ReactNode
    icon?: React.ReactNode
    className?: string
}

export const ActionCard: React.FunctionComponent<Props> = ({
                                                               icon,
                                                               title,
                                                               description,
                                                               children,
                                                               className,
                                                           }) => (
    <div
        className={clsx(style.root, 'col')}
    >
        {icon}
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.content}>{children}</div>
    </div>
)

export default ActionCard
