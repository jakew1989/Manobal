import "./cards.css";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { motion } from "motion/react"


const Cards = () => {
  return (
    <>
      <div className="cards lg:min-h-[400px]">
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card" id="one">
          <div className="card-content">
            <h2>1</h2>
            <div className="">
              <h2>Cognitive Behavioural Therapy</h2>
            </div>

            <div className="desc">
              <p>
                CBT helps clients identify and change negative thought patterns
                and behaviours, improving emotional regulation and developing
                personal coping strategies.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="card" id="two">
          <div className="card-content card-gap">
            <div className="">
              <h2>2</h2>
              <h2>Grief Counselling</h2>
            </div>

            <div className="desc">
              <p>
                Supports individuals in processing loss, navigating complex
                emotions, and finding ways to adjust to life after bereavement
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card" id="three">
          <div className="card-content card-gap">
            <div className="">
              <h2>3</h2>
              <h2>Coaching</h2>
            </div>

            <div className="desc">
              <p>
                Focuses on enhancing self-awareness and personal development,
                empowering clients to achieve goals and improve overall life
                satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card" id="four">
          <div className="card-content">
            <div className="">
              <h4>4</h4>
              <h2>Integrative Counselling</h2>
            </div>

            <div className="desc">
              <p>
                Combines various therapeutic approaches tailored to individual
                needs, promoting holistic healing and personal growth through
                flexible, client-centred methods.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="cards max-h-[550px]">
        <Link to="/my-approach" className="card group" id="five">
          <div className="content">
            <div className="heading">
              <h2>My Approach</h2>
            </div>
            <div className="desc">
              <p>
              As a BACP-registered counsellor, my practice is rooted...
              </p>
              <p className="group-hover:font-semibold">Read more...</p>
            </div>
          </div>
        </Link>
        <div className="hidden lg:block" id="six">
          <img
          className="object- w-full h-full"
          src={Logo} alt="Allison Wright Profile picture" />
        </div>
        <Link to="/about-me" className="card" id="seven">
          <div className="content">
            <div className="heading">
              <h2>About me</h2>
            </div>
            <div className="desc">
              <p>
              With over 20 years of experience working within the NHS, I bring
              a deep understanding...
              </p>
                  <p className="group-hover:font-semibold">Read more...</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
