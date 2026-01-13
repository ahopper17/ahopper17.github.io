import { motion } from "framer-motion";

export default function About() {
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
            className="page about"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.h2 variants={item}>About Me</motion.h2>

            <motion.p variants={item}>
                I&apos;m a Carleton College grad with a love for algorithms,
                mathematical reasoning, and problem solving. My background in
                theoretical math sharpened my analytical thinking, and I&apos;ve since
                turned that lens toward the biological sciences, with a special
                interest in genetics.
            </motion.p>

            <motion.p variants={item}>
                As a native Minnesotan, the great outdoors is where I&apos;m happiest.
                Whether I&apos;m running, hiking, or simply enjoying a good book, you&apos;ll
                likely find me soaking up the fresh air. And if you spot me in the
                summer, try not to judge my wildly uneven (yet very stylish) watch tan!
            </motion.p>

            <motion.figure variants={item} className="about-figure">
                <img
                    src="/images/WindRiver.jpg"
                    alt="Wind River (photo from a hike)."
                    className="about-photo"
                    loading="lazy"
                />
            </motion.figure>

            <motion.p variants={item}>
                My main hobbies are reading, running, and solving puzzles. I&apos;ll be
                adding a reading list to the Projects tab soon! When it comes to puzzle
                solving, crosswords are my bread and butter, but I also love a variant
                sudoku from Cracking the Cryptic. I&apos;ve gotten quick, solving the New
                York Times Monday crossword in 2 minutes, 45 seconds. I&apos;ve built some
                tools in Python to help me in solving, and am currently working on a GUI
                for them.
            </motion.p>

            <motion.p variants={item}>
                When interacting with humans, I&apos;m fluent in Russian and proficient in
                French. If I&apos;m communicating with a computer, I can do it in Python,
                Java, C++, LaTeX, and Excel. I&apos;m also capable in HTML, CSS, and
                JavaScript—this website is proof!
            </motion.p>

            <motion.figure variants={item} className="about-figure">
                <img
                    src="/images/Yellowstone.png"
                    alt="Yellowstone."
                    className="about-photo"
                    loading="lazy"
                />
            </motion.figure>
        </motion.section>
    );
}
