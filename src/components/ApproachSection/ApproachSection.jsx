import {
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  Settings
} from "lucide-react";

import "./ApproachSection.css";

const steps = [
  {
    num: "01",
    title: "Requirement Understanding",
    desc: "Once you have dropped an inquiry, we take a call with you and understand your requirements for your project. We discuss your project goals and strategic direction.",
    color: "blue-soft",
    side: "right",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Design and Prototyping",
    desc: "Our UI/UX team designs visually compelling interfaces and prototypes that ensure seamless user experiences and engagement.",
    color: "green-soft",
    side: "left",
    icon: Palette,
  },
  {
    num: "03",
    title: "Development & Quality Assurance",
    desc: "We build scalable web and mobile applications using modern technologies while ensuring high performance and reliability.",
    color: "blue-soft",
    side: "right",
    icon: Code2,
  },
  {
    num: "04",
    title: "Deployment",
    desc: "We deploy your application securely to production environments and ensure smooth performance across all platforms.",
    color: "green-soft",
    side: "left",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Maintenance & Upgrades",
    desc: "We provide ongoing support, updates, and feature enhancements to keep your product competitive and future-ready.",
    color: "blue-soft",
    side: "right",
    icon: Settings,
  },
];

export default function ApproachSection() {
  return (
    <section className="approach">
      <div className="badge">Why Choose Exotic Infotech?</div>
      {/* <p className="subtitle">
        We combine cutting-edge technology with creative innovation to deliver
        exceptional digital solutions that drive measurable business growth.
      </p> */}

      <div className="approach-list">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className={`row ${step.side}`}>
              <div className={`card ${step.color}`}>
                <div className="icon">
                  <Icon size={26} />
                </div>

                <div className="number">{step.num}.</div>

                <div className="content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>

            
            </div>
          );
        })}
      </div>

      <div className="tech-visual">
        <div className="floating-box"></div>
        <div className="floating-box small"></div>
      </div>
    </section>
  );
}
