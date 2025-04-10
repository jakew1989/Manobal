import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            {/* <footer>
                <div className="wrapper" id='footer-wrapper'>
                    <div className="description">
                        <div className="first">
                            <p>500 Terry Francine Street, San Francisco</p>
                            <p>info@mysite.com</p>
                            <p>Tel: 123-456-780</p>
                        </div>
                        <div className="second">
                            <p>Mon - Fri: 7am - 10pm</p>
                            <p>Saturday: 8am - 10pm</p>
                            <p>Sunday: 8am - 10pm</p>
                        </div>
                    </div>

                    <div className="contactform">
                        <form className="contactBox">
                            <h2><b>Contact Me:</b></h2>

                            <div className="form">
                                <div className="firstrow">
                                    <div className="firstcolumn">
                                        <div className="formelement">
                                            <label htmlFor="FirstName">First Name</label>
                                            <input type="text" id="FirstName" name="FirstName" />
                                        </div>
                                    </div>
                                    <div className="secondcolumn">
                                        <div className="formelement">
                                            <label htmlFor="LastName">Last Name</label>
                                            <input type="text" id="LastName" name="LastName" />
                                        </div>
                                    </div>
                                </div>

                                <div className="secondrow">
                                    <div className="firstcolumn">
                                        <div className="formelement">
                                            <label htmlFor="Email">Email</label>
                                            <input type="email" id="Email" name="Email" />
                                        </div>
                                    </div>
                                    <div className="secondcolumn">
                                        <div className="formelement">
                                            <label htmlFor="Subject">Subject</label>
                                            <input type="text" id="Subject" name="Subject" />
                                        </div>
                                    </div>
                                </div>

                                <div className="thirdrow">
                                    <div className="message">
                                        <label htmlFor="Message">Message</label>
                                        <textarea name="Message" id="Msg" cols="50" rows="5"></textarea>
                                        <button type="submit" className="btn">
                                            <p>Submit</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </footer> */}

            <footer>
                    <div className="wrapper" id='footer-wrapper'>
                        <div className="description">
                            <div className="first">
                                <p>500 Terry Francine Street, San Francisco</p>
                                <p>info@mysite.com</p>
                                <p>Tel: 123-456-780</p>
                            </div>
                            <div className="second">
                                <p>Mon - Fri: 7am - 10pm</p>
                                <p>Saturday: 8am - 10pm</p>
                                <p>Sunday: 8am - 10pm</p>
                            </div>
                        </div>

                        <form>
                            <h2><b>Contact Me:</b></h2>
                            <div className="contactform"> 
                                <div className="firstrow">

                                    <div className="rowleft">
                                        <div className="formtext">
                                            <p>First Name *</p>
                                        </div>
                                        <div className="fnameinput">
                                            <input type="text" id="FirstName" name="FirstName" />
                                        </div>
                                    </div>

                                    <div className="rowright">
                                        <div className="formtext">
                                            <p>Last Name *</p>
                                        </div>
                                        <div className="lnameinput">
                                            <input type="text" id="LastName" name="LastName" />
                                        </div>
                                    </div>
                                </div>

                                <div className="secondrow">

                                    <div className="rowleft">
                                        <div className="formtext">
                                            <p>Email *</p>
                                        </div>
                                        <div className="emailinput">
                                            <input type="email" id="Email" name="Email" />
                                        </div>
                                    </div>

                                    <div className="rowright">
                                        <div className="formtext">
                                            <p>Subject *</p>
                                        </div>
                                        <div className="subjectinput">
                                            <input type="text" id="Subject" name="Subject" />
                                        </div>
                                    </div>
                                </div>

                                <div className="thirdrow">

                                    <div className="formtext">
                                        <p>Message</p>
                                    </div>
                                    <div className="formarea">
                                        <textarea name="Message" id="Msg" cols="50" rows="5"></textarea>
                                    </div>
                                </div>
                                    <div className="button">
                                        <button type="submit" className="btn">
                                            <p>Submit</p>
                                        </button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </footer>
            <div className="copyright">
                <p>&copy; Manobal | Made by Maharshi</p>
            </div>
        </>
    )
}

export default Footer;
