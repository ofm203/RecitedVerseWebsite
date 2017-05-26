import React, { Component } from 'react';


import backgroundImage from '../../public/res/brickBackground.jpg';

import Header from '../components/LandingComps/Header';
import LandingPageCarousel from '../components/LandingComps/Carousel';
import MainPointsSection from '../components/LandingComps/MainPointsSection';
import PointDescriptionSection from '../components/LandingComps/PointDescriptionSection';
import Footer from '../components/LandingComps/Footer';

// The landing page for RecitedVerse.
class Landing extends Component {

    /**********************
    *                     *
    *    INITIALIZATION   *
    *                     *
    ***********************/

    componentDidMount() {
        this.props.navHeader.hide();
    }



    /**********************
    *                     *
    *        STYLES       *
    *                     *
    ***********************/

    getStyles() {
        return {
            position:'absolute',
            left:'0px',
            top:'0px'
        };
    };
    getImageStyles() {
        return {
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:'-1',
        }
    }
    getOverlay() {
        return {
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:'0',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }
    }


    render() {
        return (
            <div style={this.getStyles()}>
                <div style={this.getOverlay()}></div>
                <img alt='bg' style={this.getImageStyles()} src={backgroundImage}></img>


                <Header navHeader={this.props.navHeader}></Header>
                <LandingPageCarousel></LandingPageCarousel>

                <MainPointsSection></MainPointsSection>


                <br/><br/><br/><br/><br/><br/><br/><br/>
                <PointDescriptionSection orientation='right'></PointDescriptionSection>
                <br/><br/><br/><br/><br/><br/>
                <PointDescriptionSection orientation='left'></PointDescriptionSection>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                <Footer></Footer>
            </div>
        );
    }
}

export default Landing;
