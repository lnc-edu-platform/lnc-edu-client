import styled from 'styled-components';

export const EmptyState = styled.section`
  min-height: 360px;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 12px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 36px;
  }

  p {
    color: var(--text-soft);
  }
`;
