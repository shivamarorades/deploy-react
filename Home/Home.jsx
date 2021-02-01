import React from 'react';
import Carousel from "./Carousel.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import Flexboxes from "./Flexboxes.jsx";
import Pictures from "./Pictures.jsx";
import Middle_content from "./Middle_content.jsx";
const Home=()=>{
	return (
    <>
    <Carousel ></Carousel>

    <Flexboxes />
    <Middle_content />
    <Pictures />
    <Content />

    <Footer/>
    </>

		);
}
export default Home;