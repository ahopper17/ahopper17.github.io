import { motion } from "framer-motion";

export default function Contact() {
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
            className="page contact"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.h2 variants={item}>Contact</motion.h2>

            <motion.p variants={item}>
                Feel free to reach out to me at{" "}
                <a href="mailto:alyssaehopper@gmail.com">alyssaehopper@gmail.com</a>.
            </motion.p>

            <motion.p variants={item}>Take a look at my resumé below:</motion.p>

            <motion.div variants={item} className="resume-frame-wrap">
                <iframe
                    title="Alyssa Hopper Resume"
                    src="/resumeJan2026.pdf"
                    className="resume-frame"
                />
            </motion.div>

            <motion.p variants={item} className="resume-fallback">
                If the PDF doesn&apos;t load,{" "}
                <a href="/resumeJan2026.pdf" target="_blank" rel="noreferrer">
                    open it in a new tab
                </a>
                .
            </motion.p>
        </motion.section>
    );
}
