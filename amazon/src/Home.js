import './Home.css'

import Product from './Product'
import React from 'react'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            
            <div className="home__row">
                <Product title='Laptop Asus Rog Strix 16 ram' price={1500.00} image="https://m.media-amazon.com/images/I/515AyG6AH3L._AC_SL260_.jpg" rating={5} />
                <Product title='Laptop Asus Rog Strix 16 ram' price={1500.00} image="https://m.media-amazon.com/images/I/515AyG6AH3L._AC_SL260_.jpg" rating={5} />
                <Product title='Laptop Asus Rog Strix 16 ram' price={1500.00} image="https://m.media-amazon.com/images/I/515AyG6AH3L._AC_SL260_.jpg" rating={5} />
            </div>
            <div className="home__row">
                <Product title='Laptop Asus Rog Strix 16 ram' price={1500.00} image="https://m.media-amazon.com/images/I/515AyG6AH3L._AC_SL260_.jpg" rating={5} />
                <Product title='Laptop Asus Rog Strix 16 ram' price={1500.00} image="https://m.media-amazon.com/images/I/515AyG6AH3L._AC_SL260_.jpg" rating={5} />
                   </div>
                   <div className="home__row">
                <Product title='Laptop Asus Rog Strix 16 ram' price={1500.00} image="https://m.media-amazon.com/images/I/515AyG6AH3L._AC_SL260_.jpg" rating={5} />
                 </div>
            </div>
        </div>
    )
}

export default Home
