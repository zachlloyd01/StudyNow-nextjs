import '../styles/globals.css'
import { Container, createMuiTheme } from '@material-ui/core';
import { Fragment } from 'react';
import Navbar from './components/navbar.component';
import Head from 'next/head'

/* 
  Put global elements (navbar, footer, etc. here)
*/

export default function MyApp({ Component, pageProps }) {

  return (


    <Fragment>
        <Head>
            <title>StudyNow</title>
        </Head>
    
        <Navbar />
        <Container>
            <Component {...pageProps} />
        </Container>
    </Fragment>
  );
  
}

