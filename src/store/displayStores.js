import React,{ useState}from 'react';
import Card from './storeCard';
import Grid from "@material-ui/core/Grid";


const DisplayStores = (props) => {
  const [open, setOpen] = useState(false);

    const cardComponent = props.results.stores.map((store ,i) => {
      return( <Card 
        key={i} 
        id={ store.id} 
        storeName={(store.storeName !== null ? store.storeName : 'yehey')} 
        logo={store.logo}
        storetype={(store.storetype !== null ? store.storetype : 'yehey')}
        handleRemove={props.handleRemove}
        handleGetData={props.handleGetData}

      />
      );  
    })
    return( 
      <div>
      <div className="content-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              {cardComponent} 
              </Grid>
            </Grid>
          </Grid>
      </div>
      </div>
    )

  
}

 
export default DisplayStores;