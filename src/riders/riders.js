import React, {useState,useEffect} from 'react';
import Form from './form';
import List from './riderList';
import instance from '../instance/instance';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { storage } from '../config/firebase'
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

 
const Riders = () => {



  const classes = useStyles();
  const initialFieldValues = {
    riderName:'',
    rating:'',
    pic:'',
    contactNumber:'',
    link:'',
    createdDate:'',
    updatedDate:''
  } 
  const errMessage={
    error:false,
    errorMessage:''
  }
  var [errors,setErrors ] =  useState(errMessage)
  var [values,setValues ] =  useState(initialFieldValues)
  var [riders,setRiders] = useState(null)
  var [currentId,setCurrentId] = useState('')

  const handelInputChange = e =>{
    var { name,value }= e.target
    setValues({
      ...values,
      [name]: value,
    })
 
   
  }
  const getDate =async ()=>{

    var  yehey = await new firebase.firestore.Timestamp.now;
    setValues({
      ...values,
      createdDate: yehey.seconds,
      updatedDate: yehey.seconds,
    })
    // return yehey
  }

  const handlePost = e =>{
    e.preventDefault()
      let isError=false;
      if(values.riderName === "")
      {
        isError=true
        setErrors({
          error:true,
          errorMessage:{ riderName: "Cannot be Empty"}
        })
      }
      if(values.contactNumber === "" || isNaN(values.contactNumber))
      {
        isError=true
        if(values.contactNumber === ""){
          setErrors(prev => ({
            ...prev,
            error: true,
            errorMessage: {
              ...prev.errorMessage,
              contactNumber: "Cannot be Empty"
            }
          }));
        }
        if(isNaN(values.contactNumber)){
          setErrors(prev => ({
            ...prev,
            error: true,
            errorMessage: {
              ...prev.errorMessage,
              contactNumber: "This Must Be a number"
            }
          }));
        }
      }
      
      if(!isError) {
        if(currentId===''){
          instance.post("./riders.json", values).then((response) => {
            console.log(response)
            refresh();
            handleClear();
          }) 
        }
        else
        {
          instance.put(`riders/${currentId}.json`, values).then((response) => {
            refresh();
            handleClear();
          })
        }
      }
  }

  useEffect(()=> {
    // getDate();
    refresh();
  },[])

  const handleRemove = (id) =>{
    instance.delete(`./riders/${id}.json`).then((response)=>{
      refresh();
      handleClear();
    })
  }
  const handleGetData = (id) =>{
    const rider= riders.riders.find((rider)=>rider.id === id)
    // console.log(rider);
    setCurrentId(id)
    setValues({
      ...rider
    })
    // getDate();
  }
  const handleClear = () =>{
    setCurrentId('')
    setValues({
      ...initialFieldValues
    })
    setErrors({
      error:false,
      errorMessage:''
    })
  }
  const clickClear = e =>{
    e.preventDefault()
    handleClear();
    // getDate();

  }

  const refresh = ()=>{
    instance.get("riders.json").then((response)=>{
      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key], id: key})
        }
      setRiders({
        riders:getData
      })
    })
    getDate();
  }

  const handleChange = async(e) =>{
    if(e.target.files[0]){
      const image = e.target.files[0];
      const storageRef = storage.ref(`riders/${image.name}`)
      await storageRef.put(image)
      storageRef.getDownloadURL().then((url) => {
        setValues({
          ...values,
          pic:url
      });
      });
    }
   
  }




if(riders){
    return (
    <>
    <div className="App"><h1>Riders</h1></div>
      <Form 
        handlePost={handlePost}
        handelInputChange={handelInputChange}
        values={values}
        currentId={currentId}
        handleClear={clickClear}
        errors={errors}
        handleChange={handleChange}
      />
      <List 
        riders={riders}
        handleRemove= {handleRemove} 
        handleGetData= {handleGetData}  


      />
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
 
export default Riders;