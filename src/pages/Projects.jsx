import { motion } from "framer-motion";

export default function Projects() {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    };

    return (
        <motion.section
            className="page projects"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.h2 variants={item}>Projects</motion.h2>

            <motion.p variants={item}>Check out some of my coding projects below:</motion.p>

            {/* TBR PROJECT CARD */}
            <motion.a
                variants={item}
                href="https://ahopper17.github.io/tackle-tbr/"
                target="_blank"
                rel="noreferrer"
                className="project-card project-link"
            >
                <div className="project-card-text">
                    <h3>Project TBR</h3>
                    <p>
                        A cozy, gamified web app for tracking and reducing your to-be-read
                        pile. Built with React, Vite, and Supabase, with animations and
                        playful UX throughout.
                    </p>
                    <span className="project-cta">Visit site →</span>
                </div>
            </motion.a>

            <motion.div variants={item} className="project-card">
                <h3>Natural Selection Simulator</h3>
                <p>
                    Inspired by YouTube channel Primer, I created an environmental simulation of the forces of natural selection. Going forward, I would like to create a UI so the different variable can be adjusted by the user. I also plan on adding different 'modes' that change what feature is being selected for.
                </p>

                <p>While I work on that, you can check out this video of my Natural Selection simulator at work!</p>

                <div className="video-wrap" aria-label="Natural Selection simulator video">
                    <iframe
                        src="https://drive.google.com/file/d/1ETnrPyhsYx9t8g1dbwH-39NX3mdQgR4p/preview"
                        allow="autoplay"
                        allowFullScreen
                        title="Natural Selection Simulator"
                    />
                </div>

                <p className="project-desc">
                    Each green square is a food source that is randomly chosen by the simulator. An organism eats when it lands
                    on a food source, using up the resources in that cell and adding that to their overall energy. Food sources
                    replenish. Organisms die when they run out of energy. If an organism&apos;s energy is high enough, it reproduces
                    (there is also a chance of reproducing if the organism&apos;s energy is relatively high but not yet at reproduction
                    threshold). At each reproduction, there is a 5% chance of mutating to a faster speed. An organism with faster
                    speed can move more cells per frame, consuming any food source it lands on. Pretty neat!
                </p>
            </motion.div>
        </motion.section>
    );
}
