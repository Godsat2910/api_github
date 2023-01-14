import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    body {
        background-color: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiazed;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }
    `
