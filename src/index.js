import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Carousel from './Carousel.jsx';
import Businessinfo from './Businessinfo.jsx';
import Footer from './Footer.jsx';
import Flexboxes from './Flexboxes.jsx';
import Notification from './Notification.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index2.css';



ReactDOM.render(
<>
<Navbar />
<Carousel />
<Businessinfo />
<Flexboxes />
<Notification  />
<Footer />
</>
    ,document.getElementById('root'));