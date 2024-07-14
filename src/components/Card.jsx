"use client";

import React, { useState } from "react";

const Card = ({ src, date, heading, author, platform }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main 
    className="max-w-[550px]"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={heading}
          height="550px"
          width="900px"
          className={`transition-transform duration-300 transform ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>
      <div className="p-3 leading-10">
        <div className="text-xs font-normal py-2 px-1">{date}</div>
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p className="text-xs font-normal py-4">By {author}</p>
        <p className="text-xs font-normal text-black py-8">
          Published in{" "}
          <span className="bg-[#FFEBB2] px-2 py-1">{platform}</span>
        </p>
      </div>
    </main>
  );
};

export default Card;
