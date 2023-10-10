import React, { ReactNode } from 'react'

import MainNavigation from "./MainNavigation"
import classes from './Layout.module.css'

interface LayoutProps{
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = props => {
    return(
        <div>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout