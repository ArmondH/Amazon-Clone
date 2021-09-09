import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import { Router as Router,Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import route from 'color-convert/route';
import { auth} from './Firebase';



function App() {
  // THIS WILL SET A LISTENER TO FIREBASE SO THE APP WILL KNOW THAT THE USER IS AUTHENTICATED


useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser)  => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } 
    else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null, });
           }
       });
}, []);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "./Login">
            <Login/>
          </Route>
    {/* HEADER */}
          <Route path = './Checkout'>
            <Header/>
             <Checkout/>
         </Route>
    {/* HOME */}
            <Route path = "./Home">
                <Header/>
               <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  );


}

export default App;

// // THIS WILL SET A LISTENER TO FIREBASE SO THE APP WILL KNOW THAT THE USER IS AUTHENTICATED


// useEffect(() => {
//   // will only run once when the app component loads...

//   auth.onAuthStateChanged((authUser) => {
//     console.log("THE USER IS >>> ", authUser);

//     if (authUser) {
//       // the user just logged in / the user was logged in

//       dispatch({
//         type: "SET_USER",
//         user: authUser,
//       });
//     } else {
//       // the user is logged out
//       dispatch({
//         type: "SET_USER",
//         user: null,
//       });
//     }
//   });
// }, []);