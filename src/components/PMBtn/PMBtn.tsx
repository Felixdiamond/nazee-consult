import React from "react";
import { motion } from "framer-motion";

export function PMBtn() {
  return (
    <section className="relative flex flex-col justify-center items-center py-20 px-4 bg-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-inter font-bold text-3xl md:text-4xl text-[#4E17A8] mb-6">
          Ready to elevate your project?
        </h2>
        <p className="font-inter font-normal text-base md:text-lg text-gray-600 mb-8">
          At Nazee Consult, we have a pool of highly skilled project managers and eager interns ready to make a difference. Our candidates are{" "}
          <span className="font-semibold text-[#e67e22]">well-trained, experienced, and up-to-date</span> with the latest industry trends.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://forms.gle/VHx6GrDad4NSeUUy8"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e67e22] hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e67e22] transition duration-150 ease-in-out"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Hire a Project Manager
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg className="absolute top-0 left-0 w-48 h-48 text-[#4E17A8] opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.5,30.6,75.2,43.9C66.9,57.3,55,68.7,41.2,75.7C27.3,82.7,11.7,85.3,-3.2,90.1C-18.1,94.8,-36.2,101.7,-50.7,97.4C-65.2,93.1,-76.1,77.7,-83.3,61.2C-90.5,44.7,-94,27,-96.1,9.1C-98.1,-8.8,-98.7,-26.8,-92.1,-42.2C-85.5,-57.6,-71.8,-70.3,-56.3,-76.9C-40.8,-83.5,-23.4,-84,-4.9,-76.4C13.6,-68.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-[#e67e22] opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-65.7C52.8,-60.5,65,-52,73.3,-40.4C81.7,-28.8,86.1,-14.4,84.6,-0.9C83.1,12.7,75.6,25.3,67.8,37.6C60,49.9,51.8,61.8,40.7,69.2C29.5,76.5,14.8,79.3,0.7,78.2C-13.3,77.1,-26.7,72.1,-39.3,65.3C-52,58.5,-64,49.9,-70.8,38.4C-77.6,26.8,-79.3,13.4,-79.1,0.1C-79,-13.1,-77,-26.2,-70.4,-36.6C-63.8,-47,-52.5,-54.6,-40.6,-60.3C-28.7,-66,-14.3,-69.8,-0.2,-69.5C14,-69.2,28,-71,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}