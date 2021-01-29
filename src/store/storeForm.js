import React , {useState,useEffect} from 'react';
import { TextField, Button, MenuItem, Select ,InputLabel ,InputAdornment  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const StoreForm = (props) => {
  const classes = useStyles();


  return ( 
    <>
     <form className={classes.container} autoComplete="off" onSubmit={props.handlePost} noValidate>
     <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <MotorcycleIcon /> */}
          </Grid>
          <Grid item>
          <TextField
            type = "text"
            id = "storeName"
            name = "storeName"
            label = "Store Name"
            // className = {classes.textField}
            placeholder = "Enter Store Name "
            value={props.values.storeName}
            onChange = {props.handelInputChange} 
            margin="normal"
            // fullWidth
          />
          </Grid>
          <Grid item>
            <TextField
              type = "tel"
              id = "contactNumber"
              name = "contactNumber"
              label = "Contact Number"
              // className = {classes.textField}
              placeholder = "Enter Contact Number "
              value={props.values.contactNumber}
              onChange = {props.handelInputChange} 
              margin="normal"
              // fullWidth
            />
          </Grid>
          <Grid item>
          <TextField
                type = "text"
                id = "address"
                name = "address"
                label = "Address"
                // className = {classes.textField}
                placeholder = "Enter Address "
                value={props.values.address}
                onChange = {props.handelInputChange} 
                margin="normal"
                // fullWidth
              />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField
              type = "time"
              id = "storeHourOpen"
              defaultValue="07:30"
              name = "storeHourOpen"
              label = "Store Hour Openning"
              className = {classes.textField}
              // placeholder = " Enter Store Hour Openning "
              value={props.values.storeHourOpen}
              onChange = {props.handelInputChange} 
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              type = "time"
              id = "storeHourClose"
              defaultValue="20:00"
              name = "storeHourClose"
              label = "Store Hour Close"
              className = {classes.textField}
              // placeholder = " Enter Store Hour Openning "
              value={props.values.storeHourClose}
              onChange = {props.handelInputChange} 
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              accept="image/*"
              style={{display:'none'}}
              name={props.values.logo}
              id="contained-button-file"
              type="file"
              onChange = {props.handleChange}
            />
            <label htmlFor="contained-button-file">
              <Button 
              variant="contained" 
              color="primary" 
              component="span"
              >
                Upload Logo
              </Button>
            </label>
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Select
              labelId="Store type"
              id="storetype"
              label="store type"
              value={props.values.storetype}
              onChange={props.handleChangeType}
            >
              <MenuItem value={"Local"}>Local</MenuItem>
              <MenuItem value={"FastFood"}>FastFood</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Button  type="submit" variant="contained" color="primary">
            {props.currentId === ''?"Save":"Update"}
            </Button> 
          </Grid>
          <Grid item>
            <Button  type="button" variant="contained" color="default" onClick={()=> props.handleClear()}>
              Clear
            </Button> 
          </Grid>
        </Grid>
      </div>
      </form>
    </>
   );
}
 
export default StoreForm;