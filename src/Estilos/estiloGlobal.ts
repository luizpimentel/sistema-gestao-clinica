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
        --cor-titulos: #170C79;
        --cor-principal: #778873;
        --cor-secundaria: #A1BC98;
        --cor-terciaria: #DCCFC0;
        --cor-quaternaria: #FDF6ED;
        --cor-marrom-acinzentado: #534a4a;
    }
`;

export default GlobalContainer;