import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import logo from '../../images/logos/logo.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

  const [selectedDate, setSelectedDate] = useState({
    date: new Date()
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleVolunteer = () => {
    const newEvent = {...loggedInUser, ...selectedDate};
    fetch('https://obscure-coast-50402.herokuapp.com/addEvent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newEvent)
    })
    .then(res => res.json())
  }

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
                <form action="/addWork" method="POST" className={classes.root} noValidate autoComplete="off">
                  <TextField style={{width: '350px'}} defaultValue={loggedInUser.name} id="standard-basic" label="Full Name" required/> <br/>
                  <TextField style={{width: '350px'}} defaultValue={loggedInUser.email} id="standard-basic" label="Email" required/> <br/>
                  <TextField style={{width: '350px'}} id="standard-basic" label="Description" /> <br/>
                  <TextField style={{width: '350px'}} defaultValue={loggedInUser.title} id="standard-basic" label="Organize books at the library" required/> <br/>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date"
                        value={selectedDate.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        required
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <Link to="/events" style={{textDecoration:"none"}}>
                    <Button type="submit" onClick={handleVolunteer} style={{width: '350px'}} variant="contained" color="primary">
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