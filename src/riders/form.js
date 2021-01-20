import React,{Linking} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ChatIcon from '@material-ui/icons/Chat';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Form = (props) => {
  const classes = useStyles();
  return ( 
    <>
    {/* <a href="https://www.messenger.com/t/100000180313307">Messenger Test</a> */}
    <form className={classes.container} autoComplete="off" onSubmit={props.handlePost} noValidate>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MotorcycleIcon />
          </Grid>
          <Grid item>
            <TextField 
              error={!!props.errors.errorMessage.riderName}
              required
              name="riderName" 
              label="Rider Name" 
              onChange={props.handelInputChange}
              value={props.values.riderName }
              helperText={props.errors.errorMessage.riderName && props.errors.errorMessage.riderName}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ContactPhoneIcon />
          </Grid>
          <Grid item>
            <TextField 
              error={!!props.errors.errorMessage.contactNumber}
              type="tell"
              name="contactNumber" 
              label="Contact Number " 
              onChange={props.handelInputChange}
              value={props.values.contactNumber}
              helperText={props.errors.errorMessage.contactNumber&&props.errors.errorMessage.contactNumber}
            />
          </Grid>
          <Grid item>
            <Button  type="submit"  variant="contained" color={props.currentId === ''?"Primary":"Secondary"} >
            {props.currentId === ''?"Save":"Update"}
            </Button>
          </Grid>
          <Grid item>
            <Button   onClick={props.handleClear} variant="contained" colort="default" >
            Clear
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
              <ChatIcon />
          </Grid>
          <TextField
            name="link"
            label="Messenger Link"
            // value={value}
            onChange={props.handelInputChange}
            value={props.values.link}
          />
        </Grid>

      </div>
      </form>
 
    </>
   );
}
 
export default Form;