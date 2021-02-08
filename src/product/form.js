import React from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const Form = (props) => {
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
                // error={!!props.errors.errorMessage.riderName}
                required
                name="productName" 
                label="Product Name" 
                onChange={props.handelInputChange}
                value={props.values.productName } 
                // helperText={props.errors.errorMessage.riderName && props.errors.errorMessage.riderName}
              />
            </Grid>
            <Grid item>
              <TextField 
                // error={!!props.errors.errorMessage.riderName}
                required
                name="size" 
                label="Size" 
                onChange={props.handelInputChangeVariety}
                value={props.variety.size } 
                // helperText={props.errors.errorMessage.riderName && props.errors.errorMessage.riderName}
              />
            </Grid>
            <Grid item>
              <TextField 
                // error={!!props.errors.errorMessage.riderName}
                required
                name="price" 
                label="Price" 
                onChange={props.handelInputChangeVariety}
                value={props.variety.price } 
                // helperText={props.errors.errorMessage.riderName && props.errors.errorMessage.riderName}
              />
            </Grid>
            <Grid item>
              <Button  onClick={props.addVariety}  variant="contained" color="secondary">
              {/* {props.currentId === ''?"Save":"Update"} */}
              Add Variety
              </Button>
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              {/* <MotorcycleIcon /> */}
            </Grid>
            <Grid item>
            <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
              <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  // multiple
                  // name="store"
                  // label="Store"
                  value={props.values.store}
                  onChange={props.handleChangeType}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                <MenuItem disabled value="">
                  <em>Stores</em>
                </MenuItem>
                  {props.stores.stores.map((store) => (
                    <MenuItem key={store.id} value={store.name} >
                      {store.name}
                    </MenuItem>
                  ))}
              </Select> 
            </Grid>
            <Grid item>
              {/* <MotorcycleIcon /> */}
            </Grid>
            <Grid item>
              <TextField 
                // error={!!props.errors.errorMessage.riderName}
                required
                name="type" 
                label="Product Type" 
                onChange={props.handelInputChange}
                value={props.values.type }
                // helperText={props.errors.errorMessage.riderName && props.errors.errorMessage.riderName}
              />
            </Grid>
            <Grid item>
              <TextField
                accept="image/*"
                style={{display:'none'}}
                name={props.values.pic}
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
                  Upload Picture
                </Button>
              </label>
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">

            <Grid item>
            <Button  type="submit"  variant="contained" 
            // color={props.currentId === ''?"primary":"secondary"} 
            color="primary"
            >
             {/* {props.currentId === ''?"Save":"Update"} */}
             Save
            </Button>
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Size</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.holder.map((holder) => (
                      <TableRow key={holder.size}>
                        <TableCell align="right">{holder.size}</TableCell>
                        <TableCell align="right">{holder.price}</TableCell>
                        <TableCell align="left">
                          {/* <Button  type="submit"  variant="contained" color="secondary" >
                             <UpdateIcon />
                          </Button> &nbsp; */}
                          <Button  onClick={() => props.deleteVariety(holder)} variant="contained" color="default" >
                            <DeleteForeverIcon/>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </form>
    
    </>
   );
}
 
export default Form;