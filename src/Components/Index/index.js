import React, { Component } from 'react';
import Home from './../Home';
import Footer from './../Footer';
import Work from './../Work';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
import SocialMedia from './../SocialMedia';
import About from './../About';



class Index extends Component {
    render () {

        return (
            <div>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <SocialMedia />
                <Footer />
            </div>
        )

    }
}

export default Index;