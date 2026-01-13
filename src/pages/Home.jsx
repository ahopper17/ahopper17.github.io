import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      className="home"
      variants={container}
      initial="hidden"
      animate="show"
      key="home"
    >


      <div className="home-grid">
        <div className="home-copy">
          <motion.h1 variants={item}>Hi, I&apos;m Alyssa.</motion.h1>

          <motion.h2 variants={item}>
            pronounced /ah lee sah/
          </motion.h2>

          <motion.p variants={item} className="home-lede">
            I ask a lot of questions, and sometimes those questions turn into living, interactive things.
            With a background in mathematics, I&apos;m driven by finding computational solutions to biological mysteries.
          </motion.p>

          {/* <motion.div variants={item} className="home-cta">
            <Link className="btn" to="/projects">
              View projects
            </Link>
            <Link className="btn" to="/about">
              About me
            </Link>
          </motion.div> */}
        </div>

        <motion.div variants={item} className="home-media">
          <img
            src="/images/Graduation.png"
            alt="Carleton College Graduation, 2024."
            className="home-photo"
            loading="lazy"
          />
          <p className="home-caption">Carleton College, 2024</p>
        </motion.div>
      </div>

    </motion.section>
  );
}
