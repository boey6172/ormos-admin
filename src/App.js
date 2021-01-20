import React, { useEffect,useState }from 'react';
import logo from './logo.png';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './main/main';
import NavBar from './main/navBar';
import Stores from './store/stores'

var uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    },
    // {
    //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   scopes: [
    //     'public_profile',
    //     'email',
    //     // 'user_likes',
    //     // 'user_friends'
    //   ],
    //   customParameters: {
    //     // Forces password re-entry.
    //     auth_type: 'reauthenticate'
    //   }
    // },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: '<your-privacy-policy-url>',
  callbacks:{
    signInSuccessWithAuthResult : (authResult) =>{
      // const userInfo = authResult.additionalUserInfo; 
      // if(userInfo.isNewUser && userInfo.providerid === 'password'){
        
      //   try{
      //     authResult.user.sendEmailverification();
      //   }
      //   catch{

      //   }
      // }
      return false;
    }
  }
};
const App = () => {
  
  const [user,setuser]= useState(null);
 
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) =>{
      setuser(user) 
    })
    return authObserver;
  })

if(user){
    return (
      <>
      <Router>
      <NavBar />
        <Route exact path="/" render = {props => (
          <React.Fragment>
          <Main {...({user})}/>
          </React.Fragment>
        )} />
          
      <Route path="/stores" component={Stores}/>
      {/* <Route path="/p2p" component={PtoP}/>
      <Route path="/food" component={Food}/> */}

      </Router>
      </>
    )
}
else{
  return(
    <>
      <div className="App">
      <header className="App-header">
        <div>
         <img alt='mainLogo' src={logo} className={`App-logo`}/>
        </div>
        <div>Sign Up / Register</div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={ firebase.auth()}/>
      </header>
      
    </div>
      
    </>
  )
}

}

export default App;
