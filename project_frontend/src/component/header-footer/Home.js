import React from "react";
import img from '../../img/img.jpg'


export function Home() {
  return (
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height: "77vh",
          color: "#f5f5f5"
        }}
      >
      
      </div>
  );
}

