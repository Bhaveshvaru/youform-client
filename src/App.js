import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [image, setImage] = useState([]);
  // console.log('data', image);
  useEffect(() => {
    api();
  }, []);
  const api = async () => {
    try {
      const data = await axios.get('http://localhost:3000/image');
      setImage(data.data.images);
    } catch (error) {
      console.log(error.message);
    }
  };

  const ima = image
    .slice(-3)
    .reverse()
    .map((ima) => {
      return (
        <div key={image._id}>

          <div className="card  " style={{ width: '18rem', marginTop: '1rem' }}>
            <img
              className="card-img-top"
              src={`http://localhost:3000/${ima.productImage}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">{ima.description}</p>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="App">
      <div className="color">
        <p className="text">Gallery </p>
      </div>
      <button type="button" className="btn-sm btn-light mt-5">
        <a href="https://svgshare.com/s/Pkh">
          <img src="https://svgshare.com/i/Pkh.svg" title="share" />
          <p style={{ color: ' #2c5282' }}> Upload</p>
        </a>
        
      </button>
      <div className="upload d-flex justify-content-around">{ima}</div>
      <div className="footer">
        <p className="text">Fullstack Challenge - 2020 </p>
      </div>
    </div>
  );
}

export default App;
