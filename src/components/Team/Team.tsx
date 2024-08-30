import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import victor from "../../assets/osazee-victor.avif";
import naomi from "../../assets/igbinovia-omonua-naomi.avif";
import miracle from "../../assets/miracle-ndikom.avif";
import jennifer from "../../assets/jennifer-zoe-ebade.avif";
import './Team.scss';

const teamMembers = [
  {
    name: "Osazee Victor",
    position: "Co-Founder",
    image: victor,
    socialLinks: [
      { icon: Facebook, link: "#" },
      { icon: Twitter, link: "#" },
      { icon: Linkedin, link: "#" },
    ],
    shortDesc: "Dr. Victor has a decade of teaching experience in educational technology and live classroom environments.",
  },
  {
    name: "Omonua Naomi",
    position: "PMP",
    image: naomi,
    socialLinks: [
      { icon: Facebook, link: "#" },
      { icon: Twitter, link: "#" },
      { icon: Linkedin, link: "#" },
    ],
    shortDesc: "Omonua Naomi is a seasoned project management professional who is making strides in educational technology.",
  },
  {
    name: "Miracle Ndikom",
    position: "Community/Operations Exec.",
    image: miracle,
    socialLinks: [
      { icon: Facebook, link: "#" },
      { icon: Twitter, link: "#" },
      { icon: Linkedin, link: "#" },
    ],
    shortDesc: "Miracle Ndikom is a business manager and consultant, with a true passion for achieving success.",
  },
  {
    name: "Jennifer Zoe Ebade",
    position: "Associate Project Manager",
    image: jennifer,
    socialLinks: [
      { icon: Facebook, link: "#" },
      { icon: Twitter, link: "#" },
      { icon: Linkedin, link: "#" },
    ],
    shortDesc: "Jennifer is a seasoned project manager with diverse expertise in both agri-tech and edu-tech sectors.",
  },
];

const TeamMember = ({ member, isActive, onClick }) => (
  <motion.div
    className={`team-member ${isActive ? 'active' : ''}`}
    onClick={onClick}
    layout
    initial={false}
    animate={{ flex: isActive ? '1' : '0 1 280px', width: isActive ? '100%' : '280px', maxHeight: isActive ? 'auto' : '400px' }}
    transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
  >
    <div className="member-content">
      <motion.div className="member-image" layout>
        <img src={member.image} alt={member.name} />
      </motion.div>
      <motion.div className="member-info" layout>
        <h3>{member.name}</h3>
        <p className="position">{member.position}</p>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="description">{member.shortDesc}</p>
              <div className="social-links">
                {member.socialLinks.map((link, index) => (
                  <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </motion.div>
);


export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000); // Change active card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="team-section">
      <h2>Our Exceptional Team</h2>
      <div className="team-container">
        <AnimatePresence>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              member={member}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}