import styled from "styled-components";

export default function Header() {

  return (
    <StyledTitle>My Outivities</StyledTitle>
  )          
}


const StyledTitle = styled.h1`
  display: grid;
  top: 0;
  margin: 0;
  place-content: center;
  color: var(--second-color);
  width: 100%;
  background-color: white;
  height: 70px;
  border-bottom: solid 1px var(--neutral-color);
  box-shadow: 
  var(--neutral-color) 5px 5px 15px;
  
`;