
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography ,Fab ,Button,Menu ,MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StoreIcon from '@material-ui/icons/Store';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const signOut = () =>{
  firebase.auth().signOut().then(function() {
    console.log('Successfully Signed out')
  }).catch(function(){
    console.log('error Signed out')
  })
}

const AppBarMenu = (props) =>{
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Divider />
        <List>
        <ListItem button>
              <ListItemIcon><HomeIcon /> </ListItemIcon>
              <Link to="/">Home</Link>
        </ListItem>
        <ListItem button>
              <ListItemIcon><StoreIcon /> </ListItemIcon>
              <Link to="/stores">Stores</Link>
        </ListItem>
        <Link to="/riders">
        <ListItem button>
              <ListItemIcon><MotorcycleIcon /> </ListItemIcon>
              Riders
        </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
          <Link onClick={signOut}>Log Out</Link>
        </ListItem>

        </List>
      <Divider />
    </div>
  );

  return(
  <>
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start"  color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" >
        ORMOS
      </Typography>
    </Toolbar>
  </AppBar>


      {/* ///THIS IS WHERE THEY APPEAR */}
  <div>
    {['left'].map((anchor) => (
      <React.Fragment key={'left'}>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    ))}
  </div>  
  </>

  
  )
} 



export default AppBarMenu