import { Rocket, TrendingUp, Check } from "lucide-react";

export function MainServices() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-5xl sm font-extrabold text-gray-900 mb-6 leading-tight">
            Elevate Your Project Management Career
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Nazee Consult, we're dedicated to nurturing the next generation of project management leaders.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <ServiceCard
            icon={<Rocket size={48} className="text-indigo-600" />}
            title="Accelerate Your Growth"
            description="Our tailored services are designed to equip you with the skills, knowledge, and confidence needed to excel in this dynamic field."
            color="indigo"
          />
          <ServiceCard
            icon={<TrendingUp size={48} className="text-orange-500" />}
            title="Achieve Your Potential"
            description="With expert guidance and practical resources, we'll help you navigate the complexities of project management and emerge as a standout professional."
            color="orange"
          />
        </div>

        {/* Service Details Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceDetail />
          {/* Add more ServiceDetail components here for other services */}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-${color}-500`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
        <div className={`p-3 bg-${color}-100 rounded-full`}>{icon}</div>
        <div>
          <h2 className={`text-2xl font-bold text-${color}-600 mb-2`}>{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceDetail() {
  function handleBookCall() {
    window.open('https://paystack.com/pay/oneononecall');
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      <h3 className="text-3xl font-bold text-[#4e17a8] mb-2">Advisory Call</h3>
      <p className="text-gray-600 font-medium mb-6">30 minutes</p>
      <p className="text-gray-700 mb-8">
        Personalized, one-on-one expert guidance to propel your project management career forward.
      </p>

      <h4 className="text-xl font-semibold text-[#4e17a8] mb-4">How We Empower You:</h4>
      <ul className="space-y-3 mb-8">
        {[
          "Chart your transition into Project Management",
          "Strategize landing your first PM role",
          "Navigate exam and certification pathways",
          "Accelerate your career progression",
          "Master interview techniques and CV optimization",
          "Gain project-specific expertise (budgets, risk management, etc.)",
        ].map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check size={24} className="text-indigo-600 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <button
        className="w-full bg-gradient-to-r from-indigo-700 to-[#4e17a8] text-white py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 font-semibold"
        onClick={handleBookCall}
      >
        Book Your Call
      </button>
    </div>
  );
}