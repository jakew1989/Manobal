import "./about.css";
import profile from "../../assets/profile.jpeg"

const About = () => {
  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center" id="about-wrapper">
        <div className="text" id="about-info">
          <h1>About me</h1>
    <img src={profile} className="max-w-[300px] h-auto mx-auto" alt="" />
          <p>
            With over 20 years of experience working within the NHS, I bring a
            deep understanding the challenges people face when it comes to
            mental health and emotional wellbeing. I am a BACP-registered
            counsellor, qualified in both Psychology and Medicine from the
            University of Bath. My approach is grounded in professionalism,
            empathy, and a genuine commitment to supporting individuals through
            their unique journeys.<br></br><br></br> My counselling style is client-led, meaning I
            place your needs, pace, and goals at the centre of our work
            together. Whether you&apos;re experiencing anxiety, depression,
            relationship difficulties, or simply feeling overwhelmed by life, I
            provide a safe, confidential, and non-judgemental space where you
            can explore your thoughts and feelings. I draw on a range of
            therapeutic models to tailor the work to you, always with the aim of
            helping you feel more in control, resilient, and understood.<br></br><br></br> Having
            worked across a variety of healthcare settings, I understand the
            importance of treating each person as a whole. I believe that the
            therapeutic relationship is key to change and healing, and I strive
            to build trust and openness from the very first session. If you&apos;re
            considering counselling, I welcome you to reach out for an initial
            conversation to see how we might work together.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
