import React from "react";
import "./ConteCards.css";

const ConteCards = ({ photo, superHost, type, title, rating, beds }) => {
  return (
    <section className="mt-1  rounded  imagen_hover tu-contenedor-padre sm:mt-4" >
      <div className="p-4 flex flex-col">
        <img
          src={photo}
          alt="apartamento"
          className="w-full h-64 object-cover radio"
        />
        <div className="flex items-center justify-between mt-2">
        <p className="text-base mb-2 text-gray-500 flex" style={{ fontSize: '14px' }}>
            {superHost && <p className="superhost">Super Host </p>}
            {type} . {beds} beds
          </p>
          <div className="flex items-center">
            <p className="text-gray-700 mb-2 mr-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.43 8.86L21 9.15L16.62 14.64L17.85 21L12 18.65L6.15 21L7.38 14.64L3 9.15L9.57 8.86L12 2Z"
                  fill="#FF5A5F"
                />
              </svg>
            </p>
            <p className="text-gray-700 mb-2">{rating}</p>
          </div>
        </div>
        <h4 className="text-xl font-bold mb-0">{title}</h4>
      </div>
    </section>
  );
};

export default ConteCards;
