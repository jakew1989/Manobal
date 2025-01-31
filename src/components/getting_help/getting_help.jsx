import React from 'react'
import './getting_help.css'

const Help = () => {
    return (
        <>
            <div className="wrapper" id='help-wrapper'>
                        <div className="text" id='help-text'>
                            <h1>Getting Help</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    <div className='balls'>
                        <div className='ball-elements'>
                            <img src="../src/assets/ellipse1.png" alt="Ellipse 1"/>
                            <p>Anxiety</p>
                        </div>
                        <div className='ball-elements'>
                            <img src="../src/assets/ellipse2.png" alt="Ellipse 2" />
                            <p>Self Esteem</p>
                        </div>
                        <div className='ball-elements'>
                            <img src="../src/assets/ellipse3.png" alt="Ellipse 3" />
                            <p>Depression</p>
                        </div>
                        <div className='ball-elements' id='ball-four'>
                            <img src="../src/assets/ellipse4.png" alt="Ellipse 4" />
                            <p>Hungry</p>
                        </div>
                        <div className='ball-elements'>
                            <img src="../src/assets/ellipse5.png" alt="Ellipse 5" />
                            <p>Stress</p>
                        </div>
                    </div>
                    <div className='read-more' id='help-read-more'>
                        <button><p>More Resources</p></button>
                    </div>
            </div>
        </>
    )
}

export default Help