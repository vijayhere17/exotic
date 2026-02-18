import React from "react";
import "./OurLeaders.css";
import jatin from '../../assets/images/jatinoffice.jpeg';
import dhaval from '../../assets/images/dhavaloffice.jpeg';
import vijay from '../../assets/images/vijayoffice.jpeg';
import swapnil from '../../assets/images/swapniloffice.jpeg';

const leadersMain = [
  {
    name: "Riddhi Rana",
    role: "CEO",
    img: "https://exoticinfotech.com/Riddhi%20image.jpg",
  },
  {
    name: "Yash Shah",
    role: "Founder",
    img: "https://exoticinfotech.com/Yash%20Image.jpg",
  },
];

const teamMembers = [
  {
    name: "Jatin Patel",
    role: "Application Developer",
    img: jatin,
  },
  {
    name: "Dhaval Valvi",
    role: "Full-Stack Developer",
    img: dhaval,
  },
  {
    name: "Vijay Sharma",
    role: "Full-Stack Developer",
    img: vijay,
  },
  {
    name: "Swapnil Solanki",
    role: "UI/UX Designer & Graphic Designer",
    img: swapnil,
  },
];

const OurLeaders = () => {
  return (
    <section className="leaders-section">
      <div className="leaders-container">
        <div className="badge">Our Leaders</div>

        <p className="leaders-desc">
          Let’s introduce the top-notch people of our organization. They lead a
          team of passionate developers, designers, and strategists with
          dedication and analysis.
        </p>

        {/* MAIN MEMBERS */}
        <div className="leaders-row main-row">
          {leadersMain.map((member, index) => (
            <div className="leader-card main-card" key={index}>
              <div className="avatar-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* TEAM MEMBERS */}
        <div className="leaders-row team-row">
          {teamMembers.map((member, index) => (
            <div className="leader-card" key={index}>
              <div className="avatar-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
