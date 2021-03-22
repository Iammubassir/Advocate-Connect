import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import './App.css';
import Query from "./component/Query";
import {  login, logout, selectUser } from "./features/userSlice";
import Login from "./component/auth/Login"
import { auth } from './firebase';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL? authUser.photoURL : "https://wallpapersdsc.net/wp-content/uploads/2016/10/River-Images.jpg",
        display: authUser.displayName? authUser.displayName: authUser.email,
        email:authUser.email
       }));

      console.log(authUser)

    }
      else {
      dispatch(logout())
     }
    });
    
  },  [dispatch]); 
  return (
    <div className="App">
      {
        user ? (<Query />) : (<Login />)
      }
    
    </div>
  );
}

export default App;
