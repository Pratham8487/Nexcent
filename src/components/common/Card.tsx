import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-80 h-74 lg:h-60  p-6 bg-white rounded-xl shadow-xs flex flex-col items-center justify-center text-center space-y-4 ">
      <div className="bg-[#E8F5E9] p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#103E13]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zM3 11a3 3 0 116 0 3 3 0 01-6 0z"
          />
        </svg>
      </div>

      <h1 className="text-xl font-semibold text-[#4D4D4D]">{title}</h1>

      <p className="text-md text-[#89939E] text-balance">{description}</p>
    </div>
  );
};

export default Card;
