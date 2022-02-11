import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__wrapper'>
                <ul className='cards__items' >
                    <CardItem 
                        src='images/img-9.jpg'
                        text ='explore the hidden waterfall deep inside the amazon jungle'
                        lable = 'Aventure'
                        path ='/service'
                    />
                    <CardItem 
                        src='images/img-2.jpg'
                        text ='Travle through the Island off bali in a price cussri'
                        lable = 'Luxury'
                        path ='/service'
                    />
                    
                </ul>
                <ul className='cards__items' >
                    <CardItem 
                        src='images/img-5.jpg'
                        text ='explore the hidden waterfall deep inside the amazon jungle'
                        lable = 'Aventure'
                        path ='/service'
                    />
                    <CardItem 
                        src='images/img-3.jpg'
                        text ='Travle through the Island off bali in a price cussri'
                        lable = 'Luxury'
                        path ='/service'
                    />
                    <CardItem 
                        src='images/img-4.jpg'
                        text ='Travle through the Island off bali in a price cussri'
                        lable = 'Luxury'
                        path ='/service'
                    />
                    
                </ul>
            </div>
        </div>
    )
}

export default Cards
