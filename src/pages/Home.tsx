import React from "react";
import BreadLogo from "../assets/breadicon.svg";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Store"); // Navigate to Store Page
  };

  return (
    <BackgroundContainer>
      <Overlay />
      <ContentBox>
        <div className="BreadLogo">
          <img src={BreadLogo} />
        </div>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="rgb(245, 142, 15)"
          gutterBottom
        >
          SunBakery
        </Typography>
        <Typography
          variant="h6"
          color="#2F3645"
          textAlign="center"
          maxWidth="600px"
        >
          We offer high-quality bread made with love and the finest ingredients
          just for you.
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            backgroundColor: "#ff9800",
            color: "white",
            fontSize: "1.2rem",
            padding: "10px 20px",
            borderRadius: "15px",
            "&:hover": { backgroundColor: "#e68900" },
          }}
          onClick={handleButtonClick}
        >
          Let's Buy!
        </Button>
      </ContentBox>
    </BackgroundContainer>
  );
};

export default HomePage;

// Styled Components for Home page
const BackgroundContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;

  .BreadLogo {
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      height: 100px;
    }
  }
`;

const Overlay = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ContentBox = styled(Box)`
  position: relative;
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
