import React from "react";
import "./Experience.css";
import Timeline from "../Timeline/Timeline";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-title">
        <h5>What SkillsI Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container experience__container">
        <Timeline />
      </div>
    </section>
  );
};

export default Experience;
