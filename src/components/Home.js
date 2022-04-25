import React from 'react';
import '../components/Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home_row">
            <Product id={544354} type='Electronics' title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={299.00} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            <Product id={5654354} type='Electronics' title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Black Glass Door)" price={29999.99} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/31GpOhK+0CL._AC_SX184_.jpg" />
        </div>
        <div className="home_row">
            <Product id={453435} type='Electronics' title="Bosch 7 kg 5 Star Inverter Touch Control Fully Automatic Front Loading Washing Machine with In - built Heater (WAJ2416SIN, Silver)" price={7899.99} rating={2} image="https://images-na.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Kiosk_2._CB624699868_.jpg" />
            <Product id={43455} type='Electronics' title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)" price={4659.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Kiosk_6._CB624699868_.jpg" />
            <Product id={446835} type='Electronics' title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)" price={12999.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Kiosk_4._CB624699868_.jpg" />
        </div>
        <div className="home_row">
        <Product id={456543} type='Electronics' title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" price={149990.99} rating={5} image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg" />
        </div>
        </div>
    </div>
  )
}

export default Home