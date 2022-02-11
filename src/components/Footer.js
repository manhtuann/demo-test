import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newletter to out besst vacation deslas
                </p>
                <p className='footer-subscription-texxt'>
                    you can uncubrice at my time
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Your email'
                            className='footer-input'
                        />
                        <Button buttonStyle ='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-warrper'>
                    <div className='footer-links-items'>
                        <h2>About us</h2>
                        <Link to ='/sign-up'>How it works</Link>
                        <Link to ='/'>tesstimolas</Link>
                        <Link to ='/'>careers</Link>
                        <Link to ='/'>Invertors</Link>
                        <Link to ='/'>Terms off service</Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>Contact</h2>
                        <Link to ='/sign-up'>Contact</Link>
                        <Link to ='/'>Support</Link>
                        <Link to ='/'>Destination</Link>
                        <Link to ='/'>Invertors</Link>
                    </div>
                </div>
                <div className='footer-links-warrper'>
                    <div className='footer-links-items'>
                        <h2>Videos</h2>
                        <Link to ='/sign-up'>Submit video</Link>
                        <Link to ='/'>tesstimolas</Link>
                        <Link to ='/'>careers</Link>
                        <Link to ='/'>Invertors</Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>social media</h2>
                        <Link to ='/sign-up'>How it works</Link>
                        <Link to ='/'>tesstimolas</Link>
                        <Link to ='/'>careers</Link>
                        <Link to ='/'>Invertors</Link>
                        <Link to ='/'>Terms off service</Link>
                    </div>
                </div>
            </div>
            <section className='social-maedia' >
                <div className='social-media-wrap' >
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='wwebsite-rights'>TRVL 2020</small>
                </div>
            </section>
        </div>
    )
}

export default Footer
