import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const StoreCard = (props) =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);




  const {storeName, logo, id, storetype,handleClickOpen} = props;
  return(
  <>
   <Grid key={storeName} item>
    <Card className={classes.root}>
    <CardContent>
      {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
        store
      </Typography> */}
      <img alt='robots' src={logo}  className='content-image' />
      <div className='tc'>
        <h2>{storeName}</h2>
        <p>{storetype}</p> 
         asdasd
      </div>
    </CardContent>
      <CardActions>
        <Button onClick={() => props.handleGetData(id)} variant="contained" color="secondary">
          update
        </Button>
        <Button onClick={() => props.handleRemove(id)} variant="contained" color="default">
          Delete
        </Button>
      </CardActions>
    </Card>
    </Grid>
</>
  );
}

export default StoreCard;