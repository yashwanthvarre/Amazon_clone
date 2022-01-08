import React from 'react'
import image from './images/img-9.jpg'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src = {image}/>
            
            <div className="home__row">
                <Product 
                id = "12321341"
                title = "NordicTrack T Series Treadmills"
                price = {11.95}
                rating={5}
                image = "https://m.media-amazon.com/images/I/719uh1Um6aL._AC_SL1500_.jpg"
                />  
                <Product 
                id = "12321342"
                title = "Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black"
                price = {24.24}
                rating={4}
                image = "https://m.media-amazon.com/images/I/713Nb6CHS-L._AC_SL1500_.jpg"
                />  
            </div>
            <div className="home__row">
                <Product 
                id = "12321343"
                title = "  Robotic Vacuum Cleaner, Cleans Hard Floors to Medium-Pile Carpets, Black"
                price = {169.99}
                rating={5}
                image = "https://m.media-amazon.com/images/I/71BUIWB+TxL._AC_SL1500_.jpg"
                />  
                <Product 
                id = "12321344"
                title = "2020 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Sky Blue (4th Generation)"
                price = {670.95}
                rating={5}
                image = "https://m.media-amazon.com/images/I/71FePRgkiZL._AC_SL1500_.jpg"
                />  
               
                <Product 
                id = "12321341"
                title = "Apple iPhone 13 Pro Max (1TB, Sierra Blue) [Locked] + Carrier Subscription"
                price = {1600.95}
                rating={5}
                image = "https://m.media-amazon.com/images/I/61i8Vjb17SL._FMwebp__.jpg"
                />  
            </div>
            <div className="home__row">
               
                 <Product 
                id = "12321345"
                title = "Insignia NS-39DF310NA21 39-inch Smart HD 720p TV - Fire TV"
                price = {199}
                rating={5}
                image = "https://m.media-amazon.com/images/I/81kQyu0HvbL._AC_SL1500_.jpg"
                />  
            </div>
           
        </div>
    )
}

export default Home
