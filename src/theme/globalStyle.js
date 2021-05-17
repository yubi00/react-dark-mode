import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    html {
        width: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.backgroundColor}
    }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 600px;
  margin: 0 auto;
  transform: translate(50%, 50%);
  padding: 2rem;
  color: ${({ theme }) => theme.fontColor};
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  color: ${({ theme }) => theme.fontColor};
`;
