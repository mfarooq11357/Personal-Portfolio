import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

function Experience() {
  const showJob = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    const newSelect = { ...jobs[index] };
    newSelect.status = !newSelect.status;
    const newJobs = [...jobs];
    newJobs[index] = newSelect;
    setJobs(newJobs);
  };
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: "PROFESSIONAL EXPERIENCE",
      jobIcon: <FaRegCircleUser className="text-4xl profile-icons" />,
      jobType: [
        {
          title:
            "Frontend Web Developer | Self Employed ( Present)",
          skills: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "UI & UX",
            "Responsive designs optimized for smartphones",
          ],
        },
        {
          title:
            "Backend Web Developer | Self Employed ( Present)",
          skills: [
            "Javascript",
            "Nodejs",
            "Express",
            "Mongodb",
          ],
        },
        {
          title:
            "Internship Frontend Web Developer | Aethon April,2024-July,2024",
          skills: [
            "HTML",
            "CSS",
            "Javascript",
            "UI & UX",
            "Responsive designs optimized for smartphones",
          ],
        },
      ],
      status: false,
    },
    {
      id: 2,
      name: "E-commerce Assistant Experience",
      jobIcon: <HiOutlineHeart className="text-4xl profile-icons" />,
      jobType: [
        {
          title:
            "E-commerce Assistant (Freelance) | Shopify Product Listing (March 2022 – August 2022)",
          skills: [
            "Managed product listings",
            "Ensured accurate descriptions",
            "Enhanced store layout",
            "Applied SEO strategies",
            "Optimized performance"
          ],
        },
      ],
      status: false,
    },
  ]);
  return (
    <div className="w-4/5  mx-auto mt-60 pb-28">
      {jobs.map((job) => {
        return (
          <div key={job.id} className="mb-28">
            <div
              className="flex justify-between items-center cursor-pointer border-b pb-3 mb-7 .profile-icons-border0"
              onClick={() => showJob(job.id)}
            >
              <div className="flex justify-start items-center ">
                {job.jobIcon}
                <h2 className="text-pink-100 text-5xl ml-2">{job.name}</h2>
              </div>
              <div className="text-5xl profile-icons ">
                <HiChevronDown
                  style={{
                    rotate: job.status ? "180deg" : "0deg",
                    transition: "all 0.5s ease-out",
                  }}
                />
              </div>
            </div>
            <div className={`${" transition-all duration-500 ease-out overflow-y-auto"} ${job.status ? "opacity-100" : "opacity-0"
              }`}>
              {job.jobType.map((item) => {
                return job.status && <JobDetail item={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
function JobDetail({ item }) {
  return (
    <div>
      <div className="flex justify-start items-start text-pink-50 text-4xl">
        <HiOutlineChevronRight className="text-pink-700 " />
        <p className="text-pink-50 text-4xl">{item.title}</p>
      </div>
      <ul className="flex justify-start items-center py-5">
        {item.skills.map((skill) => (
          <li className="text-pink-50 text-3xl px-2 border-r border-pink-700">
            {skill}
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}

