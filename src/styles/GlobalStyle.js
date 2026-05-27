import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #86a788;
    --primary-hover: #78977a;
    --primary-soft: rgba(134, 167, 136, 0.12);
    --text: #191919;
    --text-soft: #6f6f6f;
    --text-h: #191919;
    --bg: #fff;
    --surface: #fff;
    --muted: #f7f9f7;
    --border: #e5e8e5;
    --code-bg: #f4f3ec;
    --accent: var(--primary);
    --accent-bg: var(--primary-soft);
    --accent-border: rgba(134, 167, 136, 0.45);
    --social-bg: var(--muted);
    --shadow:
      rgba(0, 0, 0, 0.1) 0 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

    --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
    --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
    --mono: ui-monospace, Consolas, monospace;

    font: 18px/145% var(--sans);
    letter-spacing: 0;
    color-scheme: light;
    color: var(--text);
    background: var(--bg);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    color: var(--text);
    background: var(--bg);
  }

  * {
    box-sizing: border-box;
  }

  #root {
    min-height: 100svh;
  }

  h1,
  h2 {
    font-family: var(--heading);
    font-weight: 500;
    color: var(--text-h);
  }

  h1 {
    font-size: 56px;
    letter-spacing: 0;
    margin: 32px 0;

    @media (max-width: 1024px) {
      font-size: 36px;
      margin: 20px 0;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 118%;
    letter-spacing: 0;
    margin: 0 0 8px;

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  p {
    margin: 0;
  }

  code {
    font-family: var(--mono);
    display: inline-flex;
    border-radius: 4px;
    color: var(--text-h);
    font-size: 15px;
    line-height: 135%;
    padding: 4px 8px;
    background: var(--code-bg);
  }
`;
