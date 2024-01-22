import React, { useState, useEffect } from "react";
import ConteCards from "./ConteCards";

import Estatic from "../Titulos";
import NavBar from "../NavBar/NavBar";

const RenderizarTodo = () => {
  const [data, setData] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchGValue, setSearchGValue] = useState("");
  const [citys, setCitys] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/stays.json");
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredCategories(jsonData);

        const citys = Array.from(new Set(jsonData.map((imageData)=>imageData.city)));

        setCitys(citys);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const search = () => {
    const filteredData = data.filter((imageData) =>{
      const ci = searchValue===''|| imageData.city.toString().toLowerCase().includes(searchValue.toLowerCase())
      const filterG = searchGValue===''||
      imageData.maxGuests.toString().includes(searchGValue.toLowerCase()) 
      return ci && filterG
  });
    
    setFilteredCategories(filteredData);
  };

  return (
    <section>
      <NavBar
        searchValue={searchValue}
        searchGValue={searchGValue}
        setSearchValue={ setSearchValue}
        setSearchGValue={(e) => setSearchGValue(e.target.value)}
        search={search}

        ciudades={citys}
      />

      <Estatic className="sm:mb-56" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {filteredCategories.map((imageData, index) => (
          <ConteCards key={index} {...imageData} />
        ))}
      </div>
    </section>
  );
};

export default RenderizarTodo;
