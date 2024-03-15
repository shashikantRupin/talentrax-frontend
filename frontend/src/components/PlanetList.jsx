import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  fetchColor,
  fetchPlanets,
  fetchShape,
  fetchSize,
} from "../redux/action";
import "./planet.css"; // Import CSS file

const PlanetList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const planets = useSelector((state) => state.reducer.planets);
  const shapes = useSelector((state) => state.reducer.shapes);
  const colors = useSelector((state) => state.reducer.colors);
  const sizes = useSelector((state) => state.reducer.sizes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
    dispatch(fetchShape());
    dispatch(fetchColor());
    dispatch(fetchSize());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePlanetSelect = () => {
    let filteredPlanets = planets.filter((planet) =>
      planet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSelectedPlanet(filteredPlanets[0]?.name); // Use optional chaining to avoid errors if filteredPlanets is empty
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search planet"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-btn" onClick={handlePlanetSelect}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="select-container">
        <select
          value={selectedShape}
          onChange={(e) => setSelectedShape(e.target.value)}
        >
          <option value="">Select Shape</option>
          {shapes.map((shape) => (
            <option key={shape.id} value={shape.name}>
              {shape.name}
            </option>
          ))}
        </select>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">Select Size</option>
          {sizes.map((size) => (
            <option key={size.id} value={size.name}>
              {size.name}
            </option>
          ))}
        </select>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">Select Color</option>
          {colors.map((color) => (
            <option key={color.id} value={color.name}>
              {color.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPlanet && (
        <div>
          <h1>{selectedPlanet}</h1>
          <p>
            {selectedPlanet} has {selectedColor} color and {selectedShape}{" "}
            shape.
          </p>
        </div>
      )}
    </div>
  );
};

export default PlanetList;
