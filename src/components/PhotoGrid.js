import React from 'react';
import customData from '../data/customData';
import useFetch from "../hooks/useFetch";

import './PhotoGrid.css';

const PhotoGrid = () => {

    // 🔹 Fetch photos using your custom hook
  const { loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <p className="loading">Loading Photos...</p>;
  if (error) return <p className="error">Error: {error}</p>;


  return (
    <div className="photo-gallery">
      <div className='text'><h1>Photos </h1></div>
      <div className="grid-container">
        {customData.map((item) => (
          <div key={item.id} className="photo-card" style={{ backgroundColor: item.color }}>
            <img src={item.images} alt={item.title} className="photo-img" />
            <div className="photo-info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PhotoGrid;
