import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faAws, faDocker } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {

    const [letterClass, setletterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setletterClass('text-animate-hover')
        }, 2500)

    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am a self-motivated person and believe that sincerity to work with a smart and consistent approach to any problem can solve it for you.
                        I have a passion for automation and I strongly believe in automating the deployment and testing of the application through a streamlined process. I have a strong grip over tools like Kubernetes, Docker, and tools for creating CI/CD pipelines like Github Actions.
                        Like my interest in automation, I also make sure to write efficient, short, and understandable code that runs in O(logN) or max O(n) time complexity.
                    </p>
                    <p>
                        My areas of interest include MEAN/MERN, Kubernetes, Java Spring Boot, AWS, and Microservices.
                    </p>
                    <p>
                        Here I would like to present you with a brief summary of my skills.
                        Languages: JavaScript, Java, Python, TypeScript, Html/CSS, SQL, NoSQL.
                        Frameworks/Libraries: Angular, Spring Boot, NodeJS, ExpressJS, Android Studio, Docker, Bootstrap, ReactJS.
                        Databases: MongoDB, MariaDB, Oracle DB, Google Firebase.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faAws} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faDocker} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;