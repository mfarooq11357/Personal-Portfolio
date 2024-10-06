

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";


const projects = [
  {
    name: "Vote Smart",
    description:
      "A dynamic voting app where users can vote for candidates, while admins manage candidate details in real time, ensuring an engaging experience.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "Mongodb", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: "https://i.ibb.co/qdZMJZ6/aptihealth-Web.png",
    hosted_link: "https://votesmartonline.netlify.app/",
  },
  {
    name: "HealthCare Hub",
    description:
      "Your go-to healthcare hub providing essential information about hospital services, departments, doctors, and patient resources for comprehensive care and support.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Js Libraries", color: "pink-text-gradient" },
    ],
    image: "https://i.ibb.co/HpTgr5P/aptihealth-App.png",
    hosted_link: "https://hospital-website77.netlify.app/",
  },
  {
    name: "Enchanted Phoenix",
    description:
      "At Enchanted Phoenix, we fuel digital marketing innovation, elevating your brand through creativity and excellence in the ever-changing digital landscape.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: "https://i.ibb.co/nCjtysq/zealWeb.png",
    hosted_link: "/",
  },
  {
    name: "ZCars Rental",
    description:
      "A modern, frontend-only web app built with React, featuring Home, Contact Us, FAQs, and Reviews pages, combining sleek design with user-friendly navigation.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "Js Libraries", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: "https://i.ibb.co/jMrDbD0/Capture.png",
    hosted_link: "https://z-cars-rental-agency.vercel.app/",
  },
  {
    name: "Wash My Ride",
    description:
      "WashMyRide offers convenient, eco-friendly car wash services, ensuring your vehicle shines while you enjoy a hassle-free experience at your location.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: "https://i.ibb.co/FH5m9Tv/rollWeb.png",
    hosted_link: "/",
  },
  {
    name: "Bubble Game",
    description:
      "An interactive CSS-based game featuring Play, Score, and How to Play options, with dynamic gameplay, real-time scoring, and clear instructions for users.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: "https://i.ibb.co/sjbzyFZ/rollApp.png",
    hosted_link:
      "https://mfarooq11357.github.io/mfarooq11357-Bubbles-Pop-Game-Project/",
  },
];

const ProjectCard = ({ index, name, description, tags, image, hosted_link }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, type: "spring", stiffness: 100 }}
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="card-tilt">
        <div
          className="project-image"
          onClick={() => window.open(hosted_link, "_blank")}
        >
          <img src={image} alt={name} className="image" />
        </div>

        <div className="project-info">
          <h3 className="project-title">{name}</h3>
          <p className="project-description">{description}</p>
        </div>

        <div className="project-tags">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`tag ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="works-container">
      <motion.div
        className="works-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="subtitle">My Work</p>
        <h2 className="title">Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
