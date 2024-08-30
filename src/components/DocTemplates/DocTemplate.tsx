import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const templateDescriptions = {
  "Project Charter": "Kickstart your projects with a clear and comprehensive charter that outlines objectives, scope, stakeholders, and deliverables.",
  "Project Schedule": "Plan and manage your project timelines with ease using our detailed schedule template, complete with milestones and deadlines.",
  "Project Change Request": "Handle changes seamlessly with our structured request template, ensuring all modifications are documented and approved efficiently.",
  "Project Closure": "Conclude your projects professionally, capturing lessons learned, final deliverables, and project success metrics.",
};

const TemplateItem = ({ title, description, index }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title} Template</h3>
    <p className="text-gray-600">{description}</p>
  </motion.li>
);

export function DocumentationTemplate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-8"
        >
          Ready-to-Go Project Documentation Templates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-base text-center text-gray-600 mb-12"
        >
          Elevate and speed up your workflow with our expertly crafted project
          documentation templates. Designed to save you time, enhance
          communication, and leave a lasting impression.
        </motion.p>

        <ul className="space-y-6 mb-12">
          {Object.entries(templateDescriptions).map(([title, description], index) => (
            <TemplateItem key={title} title={title} description={description} index={index} />
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-base text-center text-[#4e17a8] font-semibold mb-8"
        >
          Grab one of our templates today and streamline your project
          management process for greater efficiency and effectiveness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center flex items-center justify-center"
        >
          <a
            href="https://paystack.com/pay/u6v4m94rze"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#4e17a8] text-white font-semibold py-2 px-4 rounded transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          >
            Get Your Templates Now
            <ChevronRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
}