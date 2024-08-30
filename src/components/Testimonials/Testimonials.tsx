import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "../../assets/testimonial-1.jpg";
import testimonial2 from "../../assets/testimonial-2.jpg";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      quote:
        "I am genuinely impressed with my experience from start to finish. The process has been seamless, and now I am confident in my skills and on a clear path to becoming a professional project manager.",
      author: "Annastacia",
      role: "Project Manager",
    },
    {
      id: 2,
      image: testimonial2,
      quote:
        "Nazee Consult truly pays attention to the needs of their students. They break down project management in a way that anyone can understand. After completing the diploma program, I landed a role as a project manager!",
      author: "Bushra",
      role: "Project Manager",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4E17A8] mb-2 text-center">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Real stories from our alumni
        </p>

        <div className="relative">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === activeIndex && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-32 h-32 rounded-full object-cover mx-auto"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <blockquote className="text-xl md:text-2xl text-gray-800 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-0.5 bg-[#e67e22] mr-4"></div>
                      <div>
                        <cite className="text-lg font-semibold text-[#4E17A8] not-italic">
                          {testimonial.author}
                        </cite>
                        <span className="block text-sm text-gray-500 mt-1">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-200 ease-in-out ${
                index === activeIndex ? "bg-[#e67e22]" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#e67e22] opacity-10 rounded-full"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#4E17A8] opacity-10 rounded-full"></div>
      </div>
    </section>
  );
}