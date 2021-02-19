import '../styles/globals.css'
import { Container, createMuiTheme } from '@material-ui/core';
import { Fragment } from 'react';
import Navbar from './components/navbar.component';
import Head from 'next/head'

/* 
  Put global elements (navbar, footer, etc. here)
*/

export default function MyApp({ Component, pageProps }) {

  // TODO: CHECK IF USER DATA IN SESSION -> CHECK TOKEN EXPIRY -> REFRESH IF NEEDED
  // TODO: HIGH FUNCTION TO SAVE DATA TO STORAGE WHEN NECESSARY
  //TODO: IF NO USER DATA, BUT REFRESH TOKEN -> REFRESH USER TOKEN, GET NEW DATA

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

