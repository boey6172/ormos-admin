import React,{useState,useEffect} from 'react';
import Form from './form';
import ProductList from './productList';
import instance from '../instance/instance'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import db,{storage } from '../config/firebase'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Product = () => {
  const classes = useStyles();
  const initialFieldValues = {
    productName:'',
    rating:'',
    pic:'',
    store:'',
    specification:'',
    type:'',
    createdDate:'',
    updatedDate:''
  } 
  const varietyInt={
    size:'',
    price:'',
  }
  var [values,setValues ] =  useState(initialFieldValues)
  var [variety,setVariety ] =  useState(varietyInt)
  var [holder,setHolder ] =  useState([])
  var [stores,setStores ] =  useState(null)
  var [currentId,setCurrentId] = useState('')




  
  const handelInputChangeVariety = e =>{
    var { name,value }= e.target
    setVariety({
      ...variety,
      [name]: value,
    })
  }
  const handelInputChange = e =>{
    var { name,value }= e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const addVariety = () =>{
      setVariety(
        holder.push(variety)
      )
      setValues({
        ...values,
        specification:holder
       } )
      handleClear();
  }
  const handleClear = () =>{
    setVariety({
      ...varietyInt
    })
  }
  useEffect(()=> {
    db.child('products')
      .on('value',snapshot=>{
      // if(snapshot.val()!=null)
      //   console.log(snapshot)
      //   console.log(db)
      getStores();
    })
    db.onDisconnect(
      getStores()
    )
    // getDate();
   
  },[])
  const handlePost = e =>{
    e.preventDefault()
        if(currentId===''){
          instance.post("./products.json", values).then((response) => {
            console.log(response)
            // refresh();
            // handleClear();
          }) 
        }
        else
        {
          instance.put(`products/${currentId}.json`, values).then((response) => {
            // refresh();
            // handleClear();
          })
        }
      
  }
  const handleChangeType = (e) => {
    setValues({
      ...values,
      store: e.target.value
    })
  };

  const getStores = ()=>{
    instance.get("stores.json").then((response)=>{
      const getData=[];
      for (let key in response.data){
          getData.push({ id: key ,name:response.data[key].storeName})
          // console.log(response.data.[key].storeName)
        }
      setStores(
        {stores:getData}
      )
    })
    // getDate();
  }
  const handleChange = async(e) =>{
    if(e.target.files[0]){
      const image = e.target.files[0];
      const storageRef = storage.ref(`products/${image.name}`)
      await storageRef.put(image)
      storageRef.getDownloadURL().then((url) => {
        setValues({
          ...values,
          pic:url
      });
      });
    }
   
  }


if(stores)
 { return ( 
    <>
      <Form 
        values={values}
        variety={variety}
        holder={holder}
        stores={stores}
        handelInputChange={handelInputChange}
        handelInputChangeVariety={handelInputChangeVariety}
        addVariety={addVariety}
        handleChangeType={handleChangeType}
        handleChange={handleChange}
        handlePost={handlePost}


      />
      <div></div>
      <ProductList />
    </>
   );}
   else{
     return(
    <div>
    <Backdrop className={classes.backdrop} open='true' >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div>
     )
   }
}
 
export default Product