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

const List = (props) => {
  const classes = useStyles();
  return ( 
    <>   
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Picture</TableCell>
          <TableCell>Name</TableCell>
          <TableCell align="right">Contact Number</TableCell>
          <TableCell align="right">Messenger Link</TableCell>
          <TableCell align="right">Created Date</TableCell>
          <TableCell align="right">Updated Date</TableCell>
          <TableCell align="right">Actions</TableCell>
          {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.riders.riders.map((riders) => (
          <TableRow key={riders.id}>
            <TableCell component="th" scope="row">
               <Avatar alt={riders.riderName} src={riders.pic} />
            </TableCell>
            <TableCell component="th" scope="row">
              {riders.riderName}
            </TableCell>
            <TableCell align="right">{riders.contactNumber}</TableCell>
            <TableCell align="right">{riders.link}</TableCell>
            <TableCell align="right"><Helper seconds={riders.createdDate}/></TableCell>
            <TableCell align="right"><Helper seconds={riders.updatedDate}/></TableCell>
            <TableCell align="right">
            <Button onClick={() => props.handleGetData(riders.id)} variant="contained" color="secondary">
            <UpdateIcon/>
            </Button>
            &nbsp;
            <Button onClick={() => props.handleRemove(riders.id)} variant="contained" color="secondary">
               <DeleteIcon/>
            </Button>

            </TableCell>


            {/* <TableCell align="right">{riders.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>


    </>
   );
}
 
export default List;