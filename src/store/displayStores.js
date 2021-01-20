import React,{ useState}from 'react';
import Card from './storeCard';

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
      </div>
    </div>
    )

  
}

 
export default DisplayStores;