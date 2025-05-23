import "./cards.css";
import Logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { motion } from "motion/react"


const Cards = () => {
  return (
    <>
      <div className="cards">
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card" id="one">
          <div className="h-full">
            <div className="">
              <h1>1.</h1>
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
          <div className="h-full">
            <div className="">
              <h1>2.</h1>
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
          <div className="h-full">
            <div className="">
              <h1>3.</h1>
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
          <div className="h-full">
            <div className="">
              <h1>4.</h1>
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

      <div className="cards max-h-[400px]">
        <div className="card" id="five">
          <div className="content">
            <div className="heading">
              <h2>My Approach</h2>
            </div>
            <div className="desc">
              <p>
              As a BACP-registered counsellor, my practice is rooted...
              </p>
            </div>
            <div className="btn">
              <Link to="/my-approach">
                <button>
                  <p>Read More</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block" id="six">
          <img
          className="object-cover w-full h-full"
          src={Logo} alt="Allison Wright Profile picture" />
        </div>
        <div className="card" id="seven">
          <div className="content">
            <div className="heading">
              <h2>About me</h2>
            </div>
            <div className="desc">
              <p>
              With over 20 years of experience working within the NHS, I bring
              a deep understanding...
              </p>
            </div>
            <div className="btn">
              <Link to="/about-me">
                <button>
                  <p>Read More</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
