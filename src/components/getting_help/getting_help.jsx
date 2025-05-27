import "./getting_help.css";
import Ellipse1 from "../../assets/ellipse1.png";
import Ellipse2 from "../../assets/ellipse2.png";
import Ellipse3 from "../../assets/ellipse3.png";
import Ellipse4 from "../../assets/ellipse4.png";
import Ellipse5 from "../../assets/ellipse5.png";
import { motion } from "motion/react";

const Help = () => {
  return (
    <>
      <div className="wrapper" id="help-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "tween" }}
          viewport={{ once: true }}
          className="text"
          id="help-text"
        >
          <h1>Getting Help</h1>
          <p>
            Talking to a counselor can help you understand and manage personal
            challenges in a safe, supportive space. It’s a strong step toward
            healing, clarity, and emotional well-being.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "tween" }}
          viewport={{ once: true }}
          className="balls"
        >
          <div className="ball-elements transition-transform duration-300 ease-out hover:-translate-y-4 hover:animate-bounce-once">
            <img src={Ellipse1} alt="Ellipse 1" />
            <em>
              <p>Anxiety</p>
            </em>
          </div>
          <div className="ball-elements transition-transform duration-300 ease-out hover:-translate-y-4 hover:animate-bounce-once">
            <img src={Ellipse2} alt="Ellipse 2" />
            <em>
              <p>Self Esteem</p>
            </em>
          </div>
          <div className="ball-elements transition-transform duration-300 ease-out hover:-translate-y-4 hover:animate-bounce-once">
            <img src={Ellipse3} alt="Ellipse 3" />
            <em>
              <p>Depression</p>
            </em>
          </div>
          <div
            className="ball-elements transition-transform duration-300 ease-out hover:-translate-y-4 hover:animate-bounce-once"
            id="ball-four"
          >
            <img src={Ellipse4} alt="Ellipse 4" />
            <em>
              <p>Grief</p>
            </em>
          </div>
          <div className="ball-elements transition-transform duration-300 ease-out hover:-translate-y-4 hover:animate-bounce-once">
            <img src={Ellipse5} alt="Ellipse 5" />
            <em>
              <p>Stress</p>
            </em>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Help;
