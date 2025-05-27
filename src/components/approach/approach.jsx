import "./approach.css";
import { motion } from "motion/react";

const Approach = () => {
  return (
    <>
      <div
        className="wrapper flex flex-col items-center justify-center"
        id="approach-wrapper"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "tween" }}
          viewport={{ once: true }}
          className="text-left"
          id="approach-info"
        >
          <h1 className="text-center">My Approach</h1>
          <p>
            As a BACP-registered counsellor, my practice is rooted in a
            client-led philosophy. This means that I see you as the expert in
            your own life, and our work together will be guided by your needs,
            your pace, and what feels most meaningful to you. I believe in
            creating a space where you feel truly heard, supported, and safe to
            explore whatever’s on your mind—without judgement. I draw on a range
            of therapeutic methods, tailoring each session to suit you as an
            individual. Some of the approaches I may incorporate include:
            <ul className="flex flex-col pt-5">
              <li>
                <strong>Person-Centred Therapy –</strong> focusing on empathy,
                unconditional positive regard, and helping you find your own
                answers
              </li>
              <li>
                <strong>Cognitive Behavioural Therapy (CBT) – </strong>exploring
                how thoughts, feelings, and behaviours interact, and learning
                practical tools to shift unhelpful patterns
              </li>
              <li>
                <strong>Mindfulness-Based Techniques – </strong>encouraging
                awareness and presence in the moment to reduce stress and
                increase emotional resilience
              </li>
              <li>
                <strong>Integrative Counselling -</strong> blending different
                approaches to offer a flexible, holistic experience
              </li>
              <li>
                <strong>Psychodynamic Elements</strong> – gently exploring past
                experiences that may influence current thoughts and behaviours
              </li>
            </ul>
            Every person is unique, and I aim to offer a supportive and
            collaborative relationship where you can feel empowered to explore,
            heal, and grow in your own time and way. My role is to walk
            alongside you with care, curiosity, and respect.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Approach;
