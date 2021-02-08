import React from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import Avatar from '@material-ui/core/Avatar';
import Helper from '../helper'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductList = (props) => {
  const classes = useStyles();
  return (  
    <>
        <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Picture</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell align="left">Variation</TableCell>
          <TableCell align="right">Store</TableCell>
          <TableCell align="right">Product Type</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { props.products.products.map((product) => (
          <TableRow key={product.id}>
            <TableCell component="th" scope="row">
               <Avatar alt={product.pic} src={product.pic} />
            </TableCell>
            <TableCell align="left">{product.productName}</TableCell>
            <TableCell align="right">
             { product.specification.map((specification) => (
               <TableCell align="right">
                 <div>
                  {specification.size} 
                 </div>
                <div>
                  {specification.price}
                </div> 
              </TableCell>
              ))
              } 
            </TableCell>
            <TableCell align="right">{product.store}</TableCell>
            <TableCell align="right">{product.type}</TableCell>
            <TableCell align="right">
            <Button onClick={() => props.handleGetData(product.id)} variant="contained" color="secondary">
            <UpdateIcon/>
            </Button>
            &nbsp;
            <Button onClick={() => props.handleRemove(product.id)} variant="contained" color="secondary">
               <DeleteIcon/>
            </Button>

            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    
    </>
  );
}
 
export default ProductList;