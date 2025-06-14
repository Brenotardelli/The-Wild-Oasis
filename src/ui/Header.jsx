import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
