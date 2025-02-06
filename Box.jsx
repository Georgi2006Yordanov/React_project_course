import { useState, useEffect } from "react";

function Box() {
        const colors = ["#a039db", "#2f09ed"]; 
        const [bgColor, setBgColor] = useState(colors[0]);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setBgColor((prevColor) => {
              const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
              return colors[nextIndex];
            });
          }, 10000); 
      
          return () => clearInterval(interval); 
        }, []);



    return (
      <div className="box" style={{backgroundColor: bgColor}}>
        <nav className="Nav">
          <ul>
            <li><a href="#1">Home</a></li>
            <li><a href="#2">News</a></li>
            <li><a href="#3">Contact</a></li>
            <li><a href="#4">About</a></li>
          </ul>
        </nav>
        <div className="text">
        <h1>Programing skills</h1>
        <p>all courses for you</p>
        </div>
      </div>
    );
  }
  
  export default Box;
  