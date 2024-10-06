// import React, { Children, useState } from "react";

// import { FaCode } from "react-icons/fa6";
// import { FaGraduationCap } from "react-icons/fa6";
// import { HiCollection } from "react-icons/hi";
// import { HiChevronDown } from "react-icons/hi";

// function Portfolio() {
//   const showDetail = (id) => {
//     const index = show.findIndex((item) => item.id == id);
//     const newItem = { ...show[index] };
//     newItem.status = !newItem.status;
//     const newShow = [...show];
//     newShow[index] = newItem;
//     setShow(newShow);
//   };
//   const [show, setShow] = useState([
//     {
//       id: 1,
//       status: false,
//       title: "Software Engineering (B.Sc)",
//       desc: [
//         "Recognized for academic excellence in core subjects.",
//         "Developed multiple web applications and projects using MERN stack.",
//       ],
//       icon: <FaGraduationCap className="text-5xl profile-icons mr-5" />,
//     },
//     {
//       id: 2,
//       status: false,
//       title: "+2 Years of Coding Experience",
//       desc: [
//         "HTML | CSS | Javascript | React | Tailwindcss | Node js | Express | Git & Github",
//         "With over two years of experience, I excel in front-end and Back-end web development, mastering HTML, CSS, and Javascript. ",
//       ],
//       icon: <FaCode className="text-5xl profile-icons mr-5" />,
//     },
//     {
//       id: 3,
//       status: false,
//       title: "+20 Projects",
//       desc: [
//         "Experienced Mern stack developer with a diverse portfolio of over 20 projects, specializing in cutting-edge web technologies",
//       ],
//       icon: <HiCollection className="text-5xl profile-icons mr-5" />,
//     },
//   ]);
//   return (
//     <div className="w-4/5 mx-auto ">
//       {show.map((item) => {
//         return (
//           <Section
//             key={item.id}
//             title={item.title}
//             desc={item.desc}
//             icon={item.icon}
//             id={item.id}
//             showDetail={showDetail}
//             status={item.status}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default Portfolio;

// function Section({ title, desc, icon, id, status, showDetail }) {
//   return (
//     <div
//       className=" cursor-pointer hover:border-pink-700 mt-20 mb-36 "
//       onClick={() => showDetail(id)}
//     >
//       <div className="flex justify-between items-center border-b pb-4 ">
//         <div className="flex  justify-center items-center">
//           {icon}
//           <div className="text-4xl flex justify-center items-center text-pink-100">
//             <span className="">{title}</span>
//           </div>
//         </div>
//         <div className="text-5xl profile-icons ">
//           <HiChevronDown
//             style={{
//               rotate: status ? "180deg" : "0deg",
//               transition: "all 0.5s ease-out",
//             }}
//           />
//         </div>
//       </div>
//       <div
//         className={`${" transition-all duration-500 ease-out overflow-visible"} ${
//           status ? "h-11" : "h-0"
//         }`}
//       >
//         {status && (
//           <div>
//             <div className="mt-5">
//               {desc.map((item) => {
//                 return (
//                   <div className="flex justify-start items-center ">


//                     //
//                     <div className="w-2 h-2 background-profile-icons rounded-full mr-3"></div>
//                     <p className="text-3xl text-pink-100 pt-3  mb-2">{item}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

import { FaCode } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { HiCollection } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

function Portfolio() {
  const showDetail = (id) => {
    const index = show.findIndex((item) => item.id === id);
    const newItem = { ...show[index] };
    newItem.status = !newItem.status;
    const newShow = [...show];
    newShow[index] = newItem;
    setShow(newShow);
  };

  const [show, setShow] = useState([
    {
      id: 1,
      status: false,
      title: "Software Engineering (B.Sc)",
      desc: [
        "Recognized for academic excellence in core subjects.",
        "Developed multiple web applications and projects using MERN stack.",
      ],
      icon: <FaGraduationCap className="text-5xl profile-icons mr-5" />,
    },
    {
      id: 2,
      status: false,
      title: "+2 Years of Coding Experience",
      desc: [
        "HTML | CSS | Javascript | React | Tailwindcss | Node js | Express | Git & Github",
        "With over two years of experience, I excel in front-end and Back-end web development, mastering HTML, CSS, and Javascript. ",
      ],
      icon: <FaCode className="text-5xl profile-icons mr-5" />,
    },
    {
      id: 3,
      status: false,
      title: "+20 Projects",
      desc: [
        "Experienced Mern stack developer with a diverse portfolio of over 20 projects, specializing in cutting-edge web technologies",
      ],
      icon: <HiCollection className="text-5xl profile-icons mr-5" />,
    },
  ]);

  return (
    <div className="w-4/5 mx-auto ">
      {show.map((item) => {
        return (
          <Section
            key={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            id={item.id}
            showDetail={showDetail}
            status={item.status}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;

function Section({ title, desc, icon, id, status, showDetail }) {
  return (
    <div
      className="cursor-pointer hover:border-pink-700 mt-20 mb-36"
      onClick={() => showDetail(id)}
    >
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex justify-center items-center">
          {icon}
          <div className="text-4xl flex justify-center items-center text-pink-100">
            <span>{title}</span>
          </div>
        </div>
        <div className="text-5xl profile-icons">
          <HiChevronDown
            style={{
              rotate: status ? "180deg" : "0deg",
              transition: "all 0.5s ease-out",
            }}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-out overflow-hidden ${status ? "max-h-40" : "max-h-0"}`}
      >
        {status && (
          <div>
            <div className="mt-5">
              {desc.map((item, index) => {
                return (
                  <div className="flex justify-start items-center" key={index}>
                    <div className="w-2 h-2 background-profile-icons rounded-full mr-3"></div>
                    <p className="text-3xl text-pink-100 pt-3 mb-2">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
