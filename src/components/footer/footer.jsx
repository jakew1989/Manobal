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
            <motion.a
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              href="mailto:rollanotherone2002@yahoo.co.uk"
              className="cursor-pointer my-5 px-3 py-1 border hover:shadow-md"
            >
              Email rollanotherone2002@yahoo.co.uk
            </motion.a>
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
                      aria-label="First name"
                    />
                  </div>
                </div>

                <div className="rowright">
                  <div className="formtext">
                    <p>Last Name *</p>
                  </div>
                  <div className="lnameinput">
                    <input required type="text" id="LastName" name="LastName" aria-label="Last name"/>
                  </div>
                </div>
              </div>

              <div className="secondrow">
                <div className="rowleft">
                  <div className="formtext">
                    <p>Email *</p>
                  </div>
                  <div className="emailinput">
                    <input required type="email" id="Email" name="Email" aria-label="email address" />
                  </div>
                </div>

                <div className="rowright">
                  <div className="formtext">
                    <p>Subject *</p>
                  </div>
                  <div className="subjectinput">
                    <input required type="text" id="Subject" name="Subject" aria-label="Email subject" />
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
                    aria-label="email text input"
                  ></textarea>
                </div>
              </div>
              <div className="flex w-full justify-center p-3">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="border border-black py-1 px-3 hover:shadow-md"
                >
                  Submit
                </motion.button>
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
