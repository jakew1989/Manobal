import React from 'react'
import './cards.css'
import Approach from '../approach/approach'
import { Link } from 'react-router-dom'
import ApproachPage from '../../pages/approach'

const Cards = () => {
    return (
        <>
            <div className="cards">
                <div className="card" id='one'>
                    <div className="content">
                        <div className="num">
                            <h1>1.</h1>
                        </div>
                        <div className="heading">
                            <h2>Individual Services</h2>
                        </div>
                        <div className="desc">
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        <div className="btn">
                            <button><p>Read More</p></button>
                        </div>
                    </div>
                </div>
                <div className="card" id='two'>
                    <div className="content">
                        <div className="num">
                            <h1>2.</h1>
                        </div>
                        <div className="heading">
                            <h2>Couples Services</h2>
                        </div>
                        <div className="desc">
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        <div className="btn">
                            <button><p>Read More</p></button>
                        </div>
                    </div>
                </div>
                <div className="card" id='three'>
                    <div className="content">
                        <div className="num">
                            <h1>3.</h1>
                        </div>
                        <div className="heading">
                            <h2>Sex Consultation</h2>
                        </div>
                        <div className="desc">
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        <div className="btn">
                            <button><p>Read More</p></button>
                        </div>
                    </div>
                </div>
                <div className="card" id='four'>
                    <div className="content">
                        <div className="num">
                            <h1>4.</h1>
                        </div>
                        <div className="heading">
                            <h2>Family Services</h2>
                        </div>
                        <div className="desc">
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        <div className="btn">
                            <button><p>Read More</p></button>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="cards">
                <div className="card" id='five'>
                    <div className="content">
                        <div className="heading">
                            <h2>My Approach</h2>
                        </div>
                        <div className="desc">
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        <div className="btn">
                            <Link to='/my-approach'>
                                <button><p>Read More</p></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card" id='six'>
                        <img src="../src/assets/image.png" alt="Chanchal Dhakal" id='picture' />
                </div>
                <div className="card" id='seven'>
                    <div className="content">
                        <div className="heading">
                            <h2>About me</h2>
                        </div>
                        <div className="desc">
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        <div className="btn">
                            <Link to='/about-me'>
                                <button><p>Read More</p></button>
                            </Link>
                        </div>
                    </div>
                </div>    
            </div>    
        </>
    )
}

export default Cards