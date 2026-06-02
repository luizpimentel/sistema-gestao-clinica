import { createGlobalStyle } from 'styled-components';

const GlobalContainer = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
    
    body {
    }

    :root {
        --font-principal: 'Dela Gothic One', sans-serif;
        --cor-principal: #170C79;
    }
`;

export default GlobalContainer;