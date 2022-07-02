import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setletterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setletterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <div className='contact-form'>
                        <form action="">
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className='info-map'>
                Mohsin Ali,
                <br />
                Pakistan
                <br />
                <span>m.alifarhat@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[33.6844, 73.0479]} zoom={10}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[33.6844, 73.0479]}>
                        {/* <Popup>Mohsin lives here come over</Popup> */}
                    </Marker>
                </MapContainer>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;