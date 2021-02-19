import { Button, makeStyles, Grid, TextField, Typography } from "@material-ui/core";
import { Fragment } from "react";
import axios from 'axios';

export default function signup() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        formItem: {
            width: '100%',
            paddingBottom: '1em'
        },
        submitButton: {
            backgroundColor: "#406E8E",
            color: "#fff",
            float: 'right',
            marginRight: "4.5em",
            '&:hover': {
                backgroundColor: "#487ca0"
            }
        }
    }));

    const classes = useStyles();

    const registerUser = async event => {
        event.preventDefault(); // Prevent default reload form behavior
        let data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        };

        let res = await axios.post('/api/users/signup', data);

        await localStorage.setItem("refreshToken", JSON.stringify(res.data.refreshToken));

        await sessionStorage.setItem("userData", JSON.stringify(res.data.sendData));

        console.log(sessionStorage)
        
    }

    return (
        <Fragment>
            <Typography variant="h1">
                Signup
            </Typography>
            <form className={classes.root} onSubmit={registerUser}>
                <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                    <Grid item xs={12} className={classes.formItem}>
                        <TextField id="name" name="name" autoComplete="name" label="Name" variant="outlined" style={{width: "100%"}}/>
                    </Grid>   
                    <Grid item xs={12} className={classes.formItem}>
                        <TextField id="email"  name="email" autoComplete="email" label="Email" type="email" variant="outlined" style={{width: "100%"}} />
                    </Grid>   
                    <Grid item xs={12} className={classes.formItem}>
                        <TextField id="password" name="password" autoComplete="password" label="Password" type="password" variant="outlined" style={{width: "100%"}} />
                    </Grid>
                    <Grid item xs={12} className={classes.formItem}>
                        <Button variant="contained" className={classes.submitButton} type="submit"> 
                            Submit
                        </Button>
                    </Grid>
                </Grid>
                 
            </form>
        </Fragment>
    );
}