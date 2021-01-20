import React,{ useState}from 'react';
import Card from './storeCard';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DisplayStores = ({results}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const cardComponent = results.stores.map((store ,i) => {
      return( <Card 
        key={i} 
        id={ i} 
        storeName={(store.storeName !== null ? store.storeName : 'yehey')} 
        logo={store.logo}
        storetype={(store.storetype !== null ? store.storetype : 'yehey')}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}

      />
      );  
    })
    return( 
    <div> 
      <div>
      {cardComponent} 
      </div>
      <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
      </div>
    </div>
    )

  
}

 
export default DisplayStores;