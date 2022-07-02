import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const Home = () => {

    const [letterClass, setletterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setletterClass('text-animate-hover')
        }, 4000)

    }, [])

    const nameArray = ['o', 'h', 's', 'i', 'n', ' ', 'A', 'l', 'i'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1><span className={letterClass}>Hi</span>, <br /> <span className={letterClass}>I'm</span> <span className='letter-m'>M</span>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={15} />
                    </h1>
                    <h2>Full Stack developer / DevOps</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;