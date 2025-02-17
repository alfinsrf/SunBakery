import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <LeftSection>
        <Brand>SunBakery</Brand>
        <NavLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/store">Store</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavLinks>
      </LeftSection>
    </NavbarContainer>
  );
};

export default NavBar;

// Styled Components for NavBar
const NavbarContainer = styled.nav`
  position: sticky;
  font-family: "Poppins", sans-serif;
  top: 0;
  background-color: rgb(26, 168, 197);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  border-radius: 0 0 15px 15px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Brand = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff9800;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
