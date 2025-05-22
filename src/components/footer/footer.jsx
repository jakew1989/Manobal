import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lfzbjic", // replace with your EmailJS service ID
        "template_a3mpry2", // replace with your EmailJS template ID
        form.current,
        "TrfTZ_YBSnEsnkYTq" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <>
      <footer>
        <div className="footer-wrapper" id="contact">
          <div className="description hidden">
            <div className="">
              <p>117 Marl Close, Yeovil</p>
              <p>rollanotherone2002@yahoo.co.uk</p>
              <p>Tel: 07464953101</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
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
                <button type="submit" className="btn">
                  <p className="text-center">Submit</p>
                </button>
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
