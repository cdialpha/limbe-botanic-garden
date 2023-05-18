import React from "react";

const StationCard = ({ title, location, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StationCard;
