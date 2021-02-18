import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Fragment } from 'react';
import { createMuiTheme } from '@material-ui/core';

/* Homepage */

export default function Home() {
    
    return (
        <Fragment>
            
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <p>StudyNow HomePage</p>
      
        </Fragment>
    );
}
