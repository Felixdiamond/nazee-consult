import { motion } from 'framer-motion';
import test1 from "../../assets/testimonial-1.jpg";
import test2 from "../../assets/testimonial-2.jpg";

const TestimonialCard = ({ name, role, image, testimonial, index }) => {
  return (
    <motion.div
      className="bg-[#fefefe] p-8 rounded-xl shadow-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-xl text-gray-800">{name}</h3>
          <p className="text-[#4e17a8] font-medium">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 flex-grow">"{testimonial}"</p>
    </motion.div>
  );
};

const ServiceTestimonial = () => {
  const testimonials = [
    {
      name: "Annastacia",
      role: "Project Manager",
      image: test1,
      testimonial:
        "I am genuinely impressed with my experience from start to finish. The process has been seamless, we had the opportunity to ask questions whenever we faced difficulties as our instructor was the most friendly. I started the program with no prior knowledge of project management, and now I am confident in my skills and on a clear path to becoming a professional project manager, thanks to Nazee Consult.",
    },
    {
      name: "Bushra",
      role: "Project Manager",
      image: test2,
      testimonial:
        "Nazee Consult truly pays attention to the needs of their students. They break down project management in a way that anyone, even without prior knowledge, can understand. My experience over the 8 weeks was fantastic, and the compulsory assessments really enhanced my learning. After completing the diploma program, I landed a role as a project manager within an EdTech company. I couldn't be happier with the outcome!",
    },
  ];

  return (
    <div className="bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text:3xl font-bold text-gray-900">
            What Our Clients Say
            <span className="!text-[#4E17A8]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonial;