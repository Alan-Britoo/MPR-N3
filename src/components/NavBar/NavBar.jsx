import React, { useState, useRef, useEffect } from "react";
import { logo } from "../../assets/index";
import "./NavBar.css";
import loc from "../../assets/location.svg";
import NavInteractive from "./NavInteractive";

const NavBar = ({
  searchValue,
  setSearchValue,
  search,
  searchGValue,
  setSearchGValue,
  ciudades,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalM, setShowModalM] = useState(false);
  const [showModalC, setShowModalC] = useState(false);

  const inputCityRef = useRef(null);
  const inputGuestsRef = useRef(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModalM = () => {
    setShowModalM(true);
  };

  const handleCloseModalM = () => {
    setShowModalM(false);
  };

  const handleOpenModalC = () => {
    setShowModalC(true);
  };

  const handleCloseModalC = () => {
    setShowModalC(false);
  };

  const handleSearch = () => {
    search();
    handleCloseModal();
  };
  const hcClick=(city)=>{
    setSearchValue(city);
  }

  return (
    <header className="w-full h-16 flex justify-center items-center  ">
      <nav className="flex flex-wrap justify-between items-center w-full mb-10 pt-3 ">
        <img
          src={logo}
          alt="LogoEmpresa"
          className="w-36 h-7 object-contain mt-4"
        />
        <div
          className="mt-6 border-slate-300 border flex"
          style={{ borderRadius: "12px" }}
        >
          <input
            type="text"
            className="url_input_1 border-none w-[85px] "
            placeholder="Location "
            style={{
              width: "85px",
              transition: "width 0.5s",
              paddingLeft: "13px",
              paddingRight: "0",
              borderRadius: "10px",
            }}
            onClick={handleOpenModal}
            onChange={setSearchValue}
            value={searchValue}
            ref={inputCityRef}
          />
          <input
            type="text"
            className="url_input border-none"
            placeholder="Add guests"
            style={{
              width: "85px",
              transition: "width 0.5s",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "7px",
            }}
            value={searchGValue}
            onChange={setSearchGValue} 
            onClick={handleOpenModal}
            ref={inputGuestsRef}
          />
          <button
            type="button"
            onClick={handleOpenModal}
            className="black_btn border-none border buscar w-[50px]"
            style={{ borderRadius: "20px", padding: "0px" }}
          >
            <svg
              className="w-[50px] h-[24px] text-red-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22 22l-5.2-5.2"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                handleCloseModalM();
                handleCloseModalC();
                handleCloseModal();
              }}
            >
              &times;
            </span>
            <div
              className="mt-6 border-slate-300 border flex"
              style={{ borderRadius: "12px" }}
            >
              <input
                type="text"
                className="url_input_1 border-none "
                placeholder="Location "
                style={{
                  width: "426px",
                  height: "55px",
                  transition: "width 0.5s",
                  paddingLeft: "13px",
                  paddingRight: "0",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  handleCloseModalM();
                  handleOpenModalC();
                }}
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                ref={inputCityRef}
              />
              <input
                type="number"
                className="url_input border-none"
                placeholder="Add guests"
                style={{
                  width: "426px",
                  height: "55px",
                  transition: "width 0.5s",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "7px",
                }}
                onClick={() => {
                  handleOpenModalM();
                  handleCloseModalC();
                }}
                onChange={setSearchGValue}
                value={searchGValue}
                ref={inputGuestsRef}
                
              />
              
              <button
                type="button"
                onClick={() => {
                  handleSearch();
                  handleCloseModalC();
                  handleCloseModalM();
                  console.log(searchGValue)
                }}
                className="black_btn border-none border lupa w-[8%] flex items-center bg-red-600 ;
                "
                style={{
                  borderRadius: "20px",
                  padding: "10px",
                  margin: "0 10%",
                  background: "#EB5757",
                  color: "white",
                }}
              >
                Search
                <svg
                  className="w-[50px] h-[24px] text-red-500 lupa "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 22l-5.2-5.2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                  ></path>
                </svg>
              </button>
            </div>
            
            {showModalC &&
  ciudades.map((city, e) => (
    <ul
      className="pt-4 pl-3 "
      key={e}
     
    >
      <li className="flex lll"
       onClick={() => 
        hcClick(city)
       }
     

      >
        <img src={loc} alt="" />
        {city}
      </li>
    </ul>
  ))}
            {showModalM && <NavInteractive />}
          </div>
        </div>
      )}
      
    </header>
  );
  
};

export default NavBar;
