import React from "react";
import CountUp from "react-countup";
import { useInView } from "@/hooks/useInView";
import { Users, Globe, GraduationCap } from "lucide-react";

interface MetricItemProps {
  icon: React.ReactNode;
  end: number;
  title: string;
  description: string;
}

const MetricItem: React.FC<MetricItemProps> = ({
  icon,
  end,
  title,
  description,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center p-8 transition-all duration-300 hover:-translate-y-2">
      <div className="text-[#4E17A8] mb-4">{icon}</div>
      <div className="text-5xl font-bold text-[#e67e22] mb-3">
        {isInView ? (
          <CountUp start={0} end={end} duration={2.5} />
        ) : (
          0
        )}
      </div>
      <h3 className="text-xl font-semibold text-[#4E17A8] mb-2">{title}</h3>
      <p className="text-gray-600 text-center max-w-xs">{description}</p>
    </div>
  );
};

export const Metrics: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4E17A8] text-center mb-16">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <MetricItem
            icon={<Users size={48} strokeWidth={1.5} />}
            end={8000}
            title="Community Members"
            description="Passionate individuals driving technology, innovation, and entrepreneurship forward."
          />
          <MetricItem
            icon={<Globe size={48} strokeWidth={1.5} />}
            end={8}
            title="Countries Reached"
            description="Delivering exceptional results and driving success across borders."
          />
          <MetricItem
            icon={<GraduationCap size={48} strokeWidth={1.5} />}
            end={800}
            title="Graduates"
            description="Empowered with knowledge, clarity, and support to scale their careers."
          />
        </div>
      </div>
    </section>
  );
};