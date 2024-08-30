import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, BookOpen, PenTool, ClipboardList, ChevronRight } from "lucide-react";

const IconWrapper = ({ children }) => (
  <span className="text-orange-500 mr-2">{children}</span>
);

const FeatureItem = ({ icon, title, description }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-6"
  >
    <div className="flex items-start">
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </motion.li>
);

export function CertProgram() {
  return (
    <div className="bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Global Certification Prep
          </h1>
          <p className="text-xl sm:text-base text-gray-600">
            Intensive preparation for global project management exams such as
            CAPM, PMP, PRINCE2, and PMI-ACP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 rounded-lg p-8 shadow-md mb-12"
        >
          <p className="text-lg sm:text-base text-gray-700 mb-6">
            Our program is designed to provide you with comprehensive
            support and resources for your success.
          </p>

          <h2 className="text-2xl sm:text-lg font-bold text-gray-800 mb-6">
            What We Offer:
          </h2>

          <ul className="space-y-6">
            <FeatureItem
              icon={<CheckCircle size={24} />}
              title="Exclusive Access to Senior Advisors"
              description="Benefit from personalized guidance and insights from industry-leading professionals."
            />
            <FeatureItem
              icon={<ClipboardList size={24} />}
              title="Guideline/Advisory for Application"
              description="Receive expert assistance with your certification application process."
            />
            <FeatureItem
              icon={<BookOpen size={24} />}
              title="Tailored Speed Coaching and Study Materials"
              description="Access customized coaching sessions and high-quality study materials."
            />
            <FeatureItem
              icon={<PenTool size={24} />}
              title="Mock Exam Prep"
              description="Prepare with realistic mock exams that mirror the format and difficulty of actual tests."
            />
            <FeatureItem
              icon={<Users size={24} />}
              title="Community Support"
              description="Join a supportive community of peers and professionals who share your goals."
            />
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl sm:text-base text-gray-700 mb-8">
            Join our Global Certification Prep program and equip yourself with
            the tools and knowledge to achieve certification success. Enhance
            your career with globally recognized credentials.
          </p>
          <a
            href="https://paystack.com/pay/43tbewks69"
            className="flex items-center justify-center border border-[#4E17A8] font-semibold py-4 px-6 rounded-lg text-[#4e17a8] hover:bg-[#4e17a8] hover:text-white transition duration-200"
          >
            Start Your Journey Today
            <ChevronRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
}