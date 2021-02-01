import React from 'react';
import Home from "./Pages/Home/Home.jsx";
import Business from "./Pages/Business/Business.jsx";
import About from "./Pages/About/About.jsx";
import Navbar from "./Pages/Navbar.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Privacy_policy from "./Privacy_policy.jsx";
import Cookies_privacy_policy from "./Cookies_privacy_policy.jsx";

const App=()=>{
	return(
<>
    
    <Navbar />
    <Cookies_privacy_policy/>
    <Switch>
    <Route exact path="/"  component={Home} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/about'   component={About} />
    <Route exact path='/business'component={Business}  />
   <Route exact path='/privacy_policy' component={Privacy_policy} />
    </Switch>
	
</>
	);
}
export default App;