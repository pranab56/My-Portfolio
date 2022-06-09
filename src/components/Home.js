import React from 'react';
import About from './About';
import Banner from './banner';
import Contact from './Contact';
import Expertice from './Expertice';
import Footer from './Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Expertice></Expertice>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;