import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import logo from '../../images/logos/logo.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Register = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const classes = useStyles();

    const borderStyle = {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '25px'
    }

    return (
        <div className="App">
          <Header></Header>
            <img style={{width: '140px', margin: '20px'}} src={logo} alt=""/>
            <div className="d-flex justify-content-center">
            <div style={borderStyle}>
                <h5>Register as a Volunteer</h5>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField style={{width: '350px'}} defaultValue={loggedInUser.name} id="standard-basic" label="Full Name" /> <br/>
                    <TextField style={{width: '350px'}} defaultValue={loggedInUser.email} id="standard-basic" label="Email" /> <br/>
                    <TextField style={{width: '350px'}} id="standard-basic" label="Description" /> <br/>
                    <TextField style={{width: '350px'}} id="standard-basic" label="Organize books at the library" /> <br/>
                    <TextField style={{width: '350px'}}
                        id="date"
                        label="date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /> <br/>
                    <Link style={{textDecoration:"none"}} to="events">
                      <Button style={{width: '350px'}} variant="contained" color="primary">
                          Registration
                      </Button>
                    </Link>
                </form>
            </div> 
        </div>
        </div>
    );
};

export default Register;