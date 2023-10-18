import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root{
    // App Colors
    --blue: #5f5fcd;
    --blueLight: #8181e2;
    --blueDark: #5252ae;
    --orange: #F4B400;
    --green: #42b426;
    // Tech Colors
    --html: #E5622A;
    --css: #3595CF;
    --js: #F9C305;
    --react: #43C6EB;
    --scss: #CF72A1;
    --git: #E5622A;
    --github: #444;
    --node: #69B84D;
    --express: #444;
    --mongodb: #2B964C;
  }

  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: Quicksand, sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
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
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut'}
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 }
  }
};
