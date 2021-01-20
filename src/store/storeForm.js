import React , {useState,useEffect} from 'react';
import { TextField, Button, MenuItem, Select ,InputLabel ,InputAdornment  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const StoreForm = (props) => {
  const classes = useStyles();


  return ( 
    <>
     <form className={classes.container} autoComplete="off" onSubmit={props.handlePost} noValidate>
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
              <TextField
                type = "text"
                id = "storeName"
                name = "storeName"
                label = "Store Name"
                className = {classes.textField}
                placeholder = "Enter Store Name "
                value={props.values.storeName}
                onChange = {props.handelInputChange} 
                margin="normal"
                // fullWidth
              />
            </div>
          </div>

          <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
              <TextField
                type = "tel"
                id = "contactNumber"
                name = "contactNumber"
                label = "Contact Number"
                className = {classes.textField}
                placeholder = "Enter Contact Number "
                value={props.values.contactNumber}
                onChange = {props.handelInputChange} 
                margin="normal"
                // fullWidth
              />
            </div>
          </div>

          <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
              <TextField
                type = "text"
                id = "address"
                name = "address"
                label = "Address"
                className = {classes.textField}
                placeholder = "Enter Address "
                value={props.values.address}
                onChange = {props.handelInputChange} 
                margin="normal"
                // fullWidth
              />
            </div>
          </div>
          </div>
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
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
            </div>
          </div>

          <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
              <input
                accept="image/*"
                style={{display:'none'}}
                
                id="contained-button-file"
                // multiple
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
            </div>
          </div>
            <div className="col-md-2 d-flex justify-content-center">
            <div className="col">
              <Select
                labelId="Store type"
                id="storetype"
                value={props.values.storetype}
                onChange={props.handleChangeType}
              >
                <MenuItem value={"Local"}>Local</MenuItem>
                <MenuItem value={"FastFood"}>FastFood</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-2  justify-content-center"></div>
          <div className="col-md-4  justify-content-center">
            <div className="col">
              <Button  type="submit" variant="contained" color="primary">
                Submit
              </Button> 
            </div>
          </div>
        </div>
      </form>
    </>
   );
}
 
export default StoreForm;