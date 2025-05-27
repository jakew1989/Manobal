import "./testimonial.css";
import { motion } from "motion/react";
import AnimatedCheckmark from "../AnimatedCheckmark";

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:gap-4" id="testimonials-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "tween" }}
          viewport={{ once: true }}
          className="text"
          id="testimonials-info"
        >
          <p className="font-semibold">
            <em>
              &quot;My sessions with Allison really helped me and gave me the
              tools i needed to deal with my personal trauma&quot;
            </em>
          </p>
          <p>Gill P. Age 46</p>
        </motion.div>
        <AnimatedCheckmark />
      </div>
    </>
  );
};

export default Testimonial;
