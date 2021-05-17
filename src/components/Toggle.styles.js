import styled from "styled-components";

export const ToggleButton = styled.button`
  cursor: pointer;
  padding: 2rem;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.buttonColor};
  font-size: 1rem;
  font-weight: 800;
`;
