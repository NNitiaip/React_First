
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from './component/navbartop';
import { MDBBox, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import List_user from './component/list_user'
import allservices from './services/allservices'
import { prettyDOM } from '@testing-library/dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch ,Redirect} from 'react-router-dom';
import Adduser from './component/adduser'
import Edituser from './component/edituser'


const App = () => {
  return (


    <div className="App">
      <Router>
        <NavbarPage />
        <MDBContainer  >



            <Switch>
              <Route exact path="/home">

                  home
                {/* <List_user /> */}

              </Route>
              <Route path="/listuser">

                listuser
                <List_user />

              </Route>

              <Route  path="/adduser">

             
                <Adduser />

              </Route>

              <Route  path="/edituser">

                edituser
                <Edituser />

              </Route>
              <Route  path="*">

                  home
               
                  <Redirect to="/home" />

                  </Route>
            </Switch>





        




        </MDBContainer>
      </Router>



    </div>
  );
}

export default App;


