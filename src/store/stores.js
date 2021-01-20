import React,{useState,useEffect} from 'react';
import StoreForm from './storeForm';
import DisplayStores from './displayStores';
import instance from '../instance/instance'
import { toast } from "react-toastify";
import { storage } from '../config/firebase'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Stores = () => {
  const classes = useStyles();
  const initialFieldValues = {
    storeName:'',
    contactNumber:'',
    email:'',
    address:'',
    storeHourOpen:'',
    storeHourClose:'',
    logo:'',
    storetype:'',
    storeHours:'', 
    createdDate:'',
    updatedDate:'',
  } 
  

  var [values,setValues ] =  useState(initialFieldValues)
  var [stores,setStores] = useState(null)


  useEffect(()=> {
    instance.get("stores.json").then((response)=>{

      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key], id: key})
        }
      setStores({
        stores:getData
      })
      if (stores)
      {
        const filteredStore = stores.filter(robots => {
          return robots.name.toLowerCase().includes(values.store);
        })
      }
    })
  },[])

const handlePost = e =>{
  e.preventDefault()
    instance.post("./stores.json", values).then((response) => {
      instance.get("stores.json").then((response)=>{

        const getData=[];
        for (let key in response.data){
            getData.push({...response.data[key], id: key})
          }
        setStores({
          stores:getData
        })  
      })
    }) 
  }

  const handleChangeType = (e) => {
    setValues({
      ...values,
      storetype: e.target.value
  })
  };

  const handelInputChange = e =>{
    var { name,value }= e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleChange = async(e) =>{
    if(e.target.files[0]){
      const image = e.target.files[0];
      const storageRef = storage.ref(`images/${image.name}`)
      await storageRef.put(image)
      storageRef.getDownloadURL().then((url) => {
        setValues({
          ...values,
          logo:url
      });
      });
    }
    toast.success("You added a new Logo!");
  }
if(stores){
  return ( 
    <>
    <div>
      <StoreForm 
        values={values}
        handlePost={handlePost}
        handelInputChange={handelInputChange}
        handleChange={handleChange}
        handleChangeType={handleChangeType}
      />
     </div>
     <div>
      <DisplayStores  results={stores}/>
     </div>
     
    </> 
  );
}
else{
  return (
  <div>
    <Backdrop className={classes.backdrop} open='true' >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div>
  )
}
 
  
}
 
export default Stores;