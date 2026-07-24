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
        
        --cor-fundo: #a4b29e;
        --cor-primaria: #000000;
        --cor-secundaria: #e5eae3;
        --cor-terciaria: #f9fbf7;
        --cor-quaternaria: #d4c196;
        --cor-hover-botao: #b1a27f;

        --cor-titulo: #0000;
        --cor-texto: #3b3b3b ;

    }
`;

export default GlobalContainer;