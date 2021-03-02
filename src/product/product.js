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
  var [product,setProduct ] =  useState(null)
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
  const deleteVariety = (props) =>{
    var array = holder;
    var index= array.indexOf(props)
    if (index !== -1) {
     array.splice(index, 1);
      setValues({
        ...values,
        specification:array
       } )
    }
  }
  const handleRemove = (id) =>{
    instance.delete(`./products/${id}.json`).then((response)=>{
      handleClear();
    })
  }
  const handleGetData = (id) =>{
    setHolder([]);
    getData(id);
  }

  const getData = (id) =>{
    handleClear();
    
    var values= product.products.find((product)=>product.id === id)
    setCurrentId(id)
    setValues({
      ...values
    })
    var getData=[];
    for (let key in values.specification){
      getData.push({ size: values.specification[key].size ,price:values.specification[key].price})
    }
    console.log(getData)
    setHolder([
      ...getData
    ])
    
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
      getProduct();
    })
    db.onDisconnect(
      getStores()
    ) 
  },[])
  const handlePost = e =>{
    e.preventDefault()
        if(currentId===''){
          instance.post("./products.json", values).then((response) => {
            // console.log(response)
            // refresh();
            // handleClear();
            handleClearButton()
          }) 
        }
        else
        {
          instance.put(`products/${currentId}.json`, values).then((response) => {
            // refresh();
            // handleClear();
            handleClearButton()
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
  const getProduct = ()=>{
    instance.get("products.json").then((response)=>{
      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key],id:key})
        }
      setProduct(
        {products:getData}
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
  const handleClearButton = () =>{
    setCurrentId('')
    setValues({
      ...initialFieldValues
    })
    setVariety({
      ...varietyInt
    })
    setHolder([])
  }



if(stores !== null && product !== null)
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
        deleteVariety={deleteVariety}
        handleClearButton={handleClearButton}
        currentId={currentId}
      />
      <div></div>
      <ProductList 
      products={product}
      handleRemove={handleRemove}
      handleGetData={handleGetData}
      />
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