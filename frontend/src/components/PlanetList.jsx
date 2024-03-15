import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchColor,
  fetchPlanets,
  fetchShape,
  fetchSize,
} from "../redux/action";

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

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search planet"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
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
          <h1>{selectedPlanet.name}</h1>
          <p>
            {selectedPlanet.name} has {selectedColor} color and {selectedShape}{" "}
            shape.
          </p>
        </div>
      )}
      <div>
        {filteredPlanets.map((planet) => (
          <div key={planet.id} onClick={() => handlePlanetSelect(planet)}>
            {planet.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetList;
