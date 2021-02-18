import { AppBar, Toolbar, Typography, IconButton, Button, makeStyles } from '@material-ui/core';
import styles from '../../styles/Navbar.module.css'
import { Menu as MenuIcon } from '@material-ui/icons';
import axios from 'axios';
import Link from 'next/link'

/* 
  At top of every page
*/

export default function Navbar () {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navBarRoot: {
      backgroundColor: "#406E8E"

    }
  }));

    const classes = useStyles();
    
    return(
    <AppBar position="static">
        <Toolbar className={classes.navBarRoot}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                StudyNow
            </Typography>
            <Link href="/"><Button color="inherit">Home</Button></Link>
            <Link href="/users/signup"><Button color="inherit">Signup</Button></Link>
            <Link href="/users/login"><Button color="inherit">Login</Button></Link>
        </Toolbar>
    </AppBar>
  );
}
