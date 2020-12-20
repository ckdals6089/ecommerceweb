import React from 'react';
import homeImg from '../../assets/images/home.png'
const Home = () => {

    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">New <br /><span>ARRIVALS</span></h1>
                    <a href="#featured" className="button">GO SHOPPING</a>
                </div>
                <img src={homeImg} alt="home" className="home__img" />
            </div>
        </section>
    )
}

export default Home;