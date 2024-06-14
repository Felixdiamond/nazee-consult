// Metrics.tsx
import React from "react";
import CountUp from "react-countup";
import "./Metrics.css";
import { useInView } from "@/hooks/useInView";

interface MetricItemProps {
  icon: string;
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
    <div ref={ref} className="metric-item">
      <div className="metric-icon">{icon}</div>
      {isInView ? (
        <CountUp start={0} end={end} duration={2.5} className="metric-number" />
      ) : (
        <span className="metric-number">0</span>
      )}
      <h3 className="metric-title">{title}</h3>
      <p className="metric-description">{description}</p>
    </div>
  );
};

export const Metrics: React.FC = () => {
  return (
    <div className="metrics-section">
      <div className="metrics-container">
        <MetricItem
          icon="👥"
          end={8000}
          title="Community Members"
          description="Passionate individuals driving technology, innovation, and entrepreneurship forward."
        />

        <MetricItem
          icon="🌍"
          end={8}
          title="Countries Reached"
          description="Delivering exceptional results and driving success across borders."
        />

        <MetricItem
          icon="🎓"
          end={800}
          title="Graduates"
          description="Empowered with knowledge, clarity, and support to scale their careers."
        />
      </div>
    </div>
  );
};
