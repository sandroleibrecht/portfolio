import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: Quicksand, sans-serif;
    color: #383838;
  }

  body, html{
    overflow-x: hidden;
  }
`;

export default GlobalStyles;

// Animations / Keyframes
export const spinInAnimation = keyframes`
  0%    { transform: scale(0) rotate(-40deg) }
  100%  { transform: scale(1) rotate(0) }
`;

export const fadeInRightAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateX(30px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInLeftAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-30px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;