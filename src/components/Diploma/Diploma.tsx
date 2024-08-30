import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const Module = ({ number, title, topics }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-gray-50 rounded-xl overflow-hidden mb-6 shadow-md"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <motion.button
        className="w-full p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-orange-500">
              {number.toString().padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          </div>
          <motion.span
            className="text-orange-500"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            <ChevronDown />
          </motion.span>
        </div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-6 pb-6 space-y-2">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  className="text-gray-600 flex items-start space-x-2"
                >
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Diploma() {
  const modules = [
    {
      number: 1,
      title: "Module One",
      topics: [
        "Introduction to Project Management",
        "Real-life Project Management solution scenarios",
        "Essential roles of Project managers",
        "Basic Project Management Tools",
        "Project Management Methodologies (Agile, Waterfall & Hybrid)",
        "Project Management Estimation (Duration, Cost and Resources)",
      ],
    },
    {
      number: 2,
      title: "Module Two",
      topics: [
        "Project Management Life-cycle",
        "Building WBS (Work Breakdown Structure)",
        "Creating a Project Management Schedule",
        "Project Management Documentation",
        "Extensive Agile Project Management",
      ],
    },
    {
      number: 3,
      title: "Module Three",
      topics: [
        "Team Building and Leadership",
        "Risk Assessment and Monitoring",
        "Communication and Stakeholder Engagement",
        "Budgeting and Finances in Project Management",
        "Stakeholder Management",
      ],
    },
    {
      number: 4,
      title: "Module Four",
      topics: [
        "Project Closing",
        "Customer Satisfaction and Lesson-Learned Register",
        "How to land entry roles in Project Management and Interview Prep",
        "Building a Project Management Portfolio",
        "Overview of Global Certifications & Requirements",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Diploma in <span className="text-orange-500">Project Management</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master the art of project management in our intensive 8-week program.
        </motion.p>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {modules.map((module) => (
            <Module key={module.number} {...module} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            className="bg-orange-500 text-white font-semibold rounded py-2 px-4 hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 shadow flex items-center justify-center"
            onClick={() => window.open("https://paystack.com/pay/Diplomainpm")}
          >
            Enroll Now
            <ChevronRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
