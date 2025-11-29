import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({ experience, index }) => {
    // Determine card size based on index for bento layout
    const isLarge = index === 0 || index === 3;

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className={`
                ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-2xl shadow-card
                group cursor-pointer
                relative overflow-hidden
            `}
            whileHover={{ y: -5 }}
        >
            <div className="bg-tertiary rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="text-white text-[20px] font-bold mb-2 group-hover:text-secondary transition-colors">
                                {experience.title}
                            </h3>
                            <p className="text-secondary text-[12px] font-medium mb-2">
                                {experience.date}
                            </p>
                        </div>

                        {/* Icon */}
                        <a
                            href={experience.iconLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 ml-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/50 group-hover:bg-primary transition-colors border border-secondary/10"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={experience.icon}
                                    alt={experience.title}
                                    className="w-8 h-8 object-contain"
                                />
                            </motion.div>
                        </a>
                    </div>

                    {/* Technologies as tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {experience.company_name.split(',').slice(0, 5).map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-[10px] px-2 py-1 rounded-md bg-primary/30 text-secondary border border-secondary/20"
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>

                    {/* Description points */}
                    <ul className="space-y-2">
                        {experience.points.map((point, idx) => (
                            <li
                                key={`point-${idx}`}
                                className="text-white-100 text-[13px] leading-relaxed flex items-start"
                            >
                                <span className="text-tertiary mr-2 flex-shrink-0">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My growth as a professional
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Projects.
                </h2>
            </motion.div>

            {/* Bento Grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((experience, index) => (
                    <ProjectCard
                        key={`experience-${index}`}
                        experience={experience}
                        index={index}
                    />
                ))}
            </div>

            {/* GitHub Link */}
            <div className="flex justify-center mt-12">
                <a
                    href="https://github.com/JeffersonDevR?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-xl shadow-card hover:shadow-tertiary/50 transition-all duration-300"
                >
                    <motion.button
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See all my projects on GitHub
                    </motion.button>
                </a>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
