// Code Source: https://www.youtube.com/watch?v=bhRUBc0xjUo

import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/9-project295.png";
import img2 from "../assets/img/10-project295.png";
import img3 from "../assets/img/11-project295.png";
import img4 from "../assets/img/12-project295.png";
const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: { width: "600px" },
    collapsed: { width: "300px" },
  };
  const cardImages = [img1, img2, img3, img4];
  const cardTitle = [
    "Our Mission",
    "Our Vision",
    "Our Company",
    "Our Customer",
  ];
  const cardDescriptions = [
    "this is a description, with more text than the other cards",
    "this is a description, with more text than the other cards",
    "this is a description, with more text than the other cards",
    "this is a description, with more text than the other cards",
  ];
  return (
    <section name="company" className="py-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
          WE LOVE OUR WORK
        </h2>
        <p className="mt-2 text-3xl font-bold leading-8 text-black-600">
          FIND OUT MORE
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-[#132577] bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-white">
                  {cardTitle[index]}
                </h2>
                {index === expandedIndex && (
                  <p className="text-white text-center">
                    {cardDescriptions[index]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;