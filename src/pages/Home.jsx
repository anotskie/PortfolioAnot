import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/LandingPage");
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 10000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="home-container">
      {isLoading ? (
        <div className="loading">
          Loading<span className="loading-dots"> . . .</span>
        </div>
      ) : (
        <div>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            speed={{ type: "keyStrokeDelayInMs", value: 80 }}
            sequence={[
              `Hi\nI'm Arnold\nI do\nWeb Development\nApp Development\nGame Development\n3D Modelling\nPlease hire me ^w^`,
              "",
            ]}
            repeat={0}
          />
          {showButton && (
            <Button variant="outline-dark" onClick={handleButtonClick}>
              Click Me
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
