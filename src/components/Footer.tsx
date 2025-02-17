import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        &copy; 2025 <span>SunBakery</span>. All Rights Reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components for Footer
const FooterContainer = styled.footer`
  width: 100%;
  background-color: rgb(20, 157, 203);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 15px 15px 0 0;
  margin-top: auto;

  span {
    color: rgb(245, 142, 15);
  }
`;
