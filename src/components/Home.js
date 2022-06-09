import React from 'react';
import About from './About';
import Banner from './banner';
import Contact from './Contact';
import Expertice from './Expertice';
import Footer from './Footer';
import Portfolio from './Portfolio';



const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <About></About>
            <Expertice></Expertice>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;