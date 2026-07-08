import { createGlobalStyle } from 'styled-components';
import FontCovesLight from './fonts/Coves-Light.otf';
import FontCovesBold from './fonts/Coves-Bold.otf';

const GlobalContainer = createGlobalStyle`

    @font-face {
        font-family: 'CovesLight';
        src: url(${FontCovesLight}) format('opentype');
    }

    @font-face {
        font-family: 'CovesBold';
        src: url(${FontCovesBold}) format('opentype');
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
    
    body {
    }

    :root {
        --font-principal: 'Dela Gothic One', sans-serif;
        --font-secundaria: 'CovesLight', sans-serif;
        --font-terciaria: 'CovesBold', sans-serif;
        --cor-principal: #170C79;
        --cor-terciaria: #4635d8;
        --cor-secundaria: #F2C94C;
    }
`;

export default GlobalContainer;