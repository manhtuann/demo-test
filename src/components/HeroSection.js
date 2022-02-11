import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay muted loop />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you watting for?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                GET START
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                >
                WASTCH TRAILER <i className='far fa-play-cricle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
