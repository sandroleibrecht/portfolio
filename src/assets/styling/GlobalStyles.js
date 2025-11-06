import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root{
    // App Colors
    --blue: #4D8DF7;
    --blueLight: #68a0fa;
    --blueDark: #256cdd;
    --orange: #F4B400;
    --green: #42b426;

    // Tech Colors
    --html: #E5622A;
    --css: #3595CF;
    --js: #F9C305;
    --react: #43C6EB;
    --scss: #CF72A1;
    --python: #3595cf;
    --nodeJs: #69B84D;
    --expressJs: #444;
    --mongoDb: #2B964C;
    --redux: #7248B5;
    --socketIo: #666;
    --styledComponents: #CF72A1;
    --csharp: #8540A1;
    --aspNetCore: #318DCE;
    --sqlServer: #D65A58;
    --sql: #3366CC;
    --visualStudio: #7b63c7;
    --git: #EF7E5B;
    --github: #333;
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
