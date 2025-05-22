import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./footer.css";
import GoogleMap from "../GoogleMap";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_37073tn', // replace with your EmailJS service ID
        'template_a3mpry2', // replace with your EmailJS template ID
        form.current,
        {
          publicKey: 'wi4yhM-wpPyVL6Rum',
        }, // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          const message = document.getElementById("emailMessage")
          message.innerHTML = "Email sent, we will get back to you as soon as possible"
        },
        (error) => {
          console.log("Error:", error.text);
          const message = document.getElementById("emailMessage")
          message.innerHTML = "There is problem with this service, please use provided email or phone number to contact"        
        }
      );
  };
  return (
    <>
      <footer>
        <div className="footer-wrapper" id="contact">
          <div className="description h-full w-full hidden">
          <GoogleMap />
          </div>

          <form ref={form} className="basis-1/1 sm:basis-1/2" onSubmit={sendEmail}>
            <div className="flex flex-col items-center w-full h-full justify-center">
            <h2>
              <b>Contact Me:</b>
            </h2>
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
                  <textarea
                    name="Message"
                    id="Msg"
                    cols="50"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="button">
                <button type="submit" className="btn cursor-pointer">
                  <p className="text-center">Submit</p>
                </button>
              </div>
              <div id="emailMessage" className="text-red-500 text-lg max-w-[200px]"></div>
            </div>
            </div>
          </form>
        </div>
      </footer>
      <div className="copyright">
        <p>&copy; Wright Counselling | BACP Certified</p>
      </div>
    </>
  );
};

export default Footer;
