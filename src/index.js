import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import './index2.css';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import $ from 'jquery';
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();
 

ReactDOM.render(
	<>
	
<BrowserRouter>

<App />

</BrowserRouter>

</>
,document.getElementById("root"));