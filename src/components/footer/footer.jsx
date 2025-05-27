import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./footer.css";
import GoogleMap from "../GoogleMap";
import { motion } from "motion/react";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37073tn", // replace with your EmailJS service ID
        "template_a3mpry2", // replace with your EmailJS template ID
        form.current,
        {
          publicKey: "wi4yhM-wpPyVL6Rum",
        } // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          const message = document.getElementById("emailMessage");
          message.innerHTML =
            "Email sent, we will get back to you as soon as possible";
        },
        (error) => {
          console.log("Error:", error.text);
          const message = document.getElementById("emailMessage");
          message.innerHTML =
            "Something went wrong, try again or use email link above";
        }
      );
  };
  return (
    <>
      <footer
        className="flex flex-col md:flex-row justify-between gap-5 w-dvw p-4"
        id="contact"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="basis-1/2 aspect-square"
        >
          <GoogleMap />
        </motion.div>

        <form ref={form} className="basis-1/2" onSubmit={sendEmail}>
          <div className="flex flex-col items-center w-full h-full justify-center">
            <h2> 
              <b>Contact Me</b>
            </h2>
            <p className="cursor-pointer hover:font-bold p-5">
              Click here to email -{" "}
              <a href="mailto:rollanotherone2002@yahoo.co.uk">
                rollanotherone2002@yahoo.co.uk
              </a>
            </p>
            <p>Or</p>
            <div className="contactform w-full">
              <div className="firstrow">
                <div className="rowleft">
                  <div className="formtext">
                    <p>First Name *</p>
                  </div>
                  <div className="fnameinput">
                    <input
                      required
                      type="text"
                      id="FirstName"
                      name="FirstName"
                    />
                  </div>
                </div>

                <div className="rowright">
                  <div className="formtext">
                    <p>Last Name *</p>
                  </div>
                  <div className="lnameinput">
                    <input required type="text" id="LastName" name="LastName" />
                  </div>
                </div>
              </div>

              <div className="secondrow">
                <div className="rowleft">
                  <div className="formtext">
                    <p>Email *</p>
                  </div>
                  <div className="emailinput">
                    <input required type="email" id="Email" name="Email" />
                  </div>
                </div>

                <div className="rowright">
                  <div className="formtext">
                    <p>Subject *</p>
                  </div>
                  <div className="subjectinput">
                    <input required type="text" id="Subject" name="Subject" />
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
              <div className="flex w-full justify-center p-3">
                <button
                  type="submit"
                  className="border border-black py-1 px-3 hover:scale-105 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
              <div
                id="emailMessage"
                className="text-red-500 text-lg w-full"
              ></div>
            </div>
          </div>
        </form>
      </footer>

      <div className="copyright">
        <p>&copy; Wright Counselling | BACP Certified</p>
      </div>
    </>
  );
};

export default Footer;
