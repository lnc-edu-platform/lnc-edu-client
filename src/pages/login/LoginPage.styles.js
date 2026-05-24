import styled from 'styled-components';

export const LoginPageFrame = styled.main`
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 32px 20px;
  background: var(--bg);
`;

export const LoginCard = styled.section`
  width: min(420px, 100%);
  display: grid;
  gap: 28px;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);

  h1 {
    margin: 0 0 8px;
    font-size: 32px;
  }

  p {
    color: var(--text-soft);
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
`;

export const Field = styled.label`
  display: grid;
  gap: 8px;
  color: var(--text-h);
  font-size: 14px;
  font-weight: 700;

  input {
    height: 44px;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0 12px;
    color: var(--text-h);
    background: var(--bg);
    font: inherit;
    font-size: 15px;
  }

  input:focus {
    outline: 2px solid var(--accent-border);
    outline-offset: 2px;
  }
`;

export const LoginButton = styled.button`
  height: 44px;
  border: 0;
  border-radius: 6px;
  color: #fff;
  background: var(--accent);
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
