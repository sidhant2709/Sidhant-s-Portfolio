import React from "react";
import "./Experience.css";
import Timeline from "../Timeline/Timeline";
// import SkillsSlider from "../Slider/SkillsSlider";
import SkillsCloud from "../SkillsCloud/SkillsCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "html5",
  "css3",
  "sass",
  "vuedotjs",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
  "bootstrap",
  "tailwindcss",
  "mui",
  "styledcomponents",
  "mongodb",
  "hashnode",
  "reactivex",
  "jenkins",
  "bitbucket",
  "npm",
  "python",
  "pytest",
  "awslambda",
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>What SkillsI Have</h2>
      <SkillsCloud iconSlugs={slugs} />
      <h2>My Experience</h2>
      <div className="container experience__container">
        <Timeline />
      </div>
    </section>
  );
};

export default Experience;
