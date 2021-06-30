import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root{
    --primary: #4D8DF7;
    --primaryLight: #68a0fa;
    --primaryDark: #256cdd;
    --secondary: #F7B74D;
  }

  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: Quicksand, sans-serif;
  }

  body, html{
    overflow-x: hidden;
  }

  p, a, h1, h2, h3{
    color: #383838;
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

// Framer Motion Sets
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut'}
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 }
  }
};