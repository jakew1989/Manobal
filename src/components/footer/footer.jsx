import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <table className='footer' id='contact'>
                    <tr>
                        <td>
                            <p>500 Terry Francine Street, San Francisco</p>
                            <p>info@mysite.com</p>
                            <p>Tel:123-456-780</p>
                        </td>
                        <td>
                            <p>Mon - Fri: 7am - 10pm</p>
                            <p>Saturday: 8am - 10pm</p>
                            <p>Sunday: 8am - 10pm</p>
                        </td>
                        <td id='form'>
                            <form className='contactBox'>
                                <h2><b>Contact Me:</b></h2>
                                <table className='contactForm'>
                                    <tr>
                                        <td>
                                            <p>First Name</p>
                                        </td>
                                        <td>
                                            <p>Last Name</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="firstName" id="Fname" />
                                        </td>
                                        <td>
                                            <input type="text" name='lastName' id='Lname' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Email</p>
                                        </td>
                                        <td>
                                            <p>Subject</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="Email" id="Fname" />
                                        </td>
                                        <td>
                                            <input type="text" name='Subject' id='Lname' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Message</p>
                                        </td>
                                    </tr>
                                </table>
                                <textarea name="Message" id="Msg" cols="50" rows="5"></textarea>
                                <button className='btn'>
                                    <p>Submit</p>
                                </button>
                            </form>
                        </td>
                    </tr>
                </table>
            </footer>
                <div className="copyright">
                    <p>&copy; Manobal | Made by Maharshi</p>
            </div>
        </>
    )
}

export default Footer