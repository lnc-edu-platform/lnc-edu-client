import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: grid;
  gap: 32px;
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 32px;
  padding: 48px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    align-items: start;
    padding: 28px;
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  gap: 14px;

  p {
    color: var(--accent);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    max-width: 560px;
  }

  span {
    max-width: 560px;
    color: var(--text);
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const BaseLink = styled(Link)`
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 720px) {
    flex: 1;
  }
`;

export const PrimaryLink = styled(BaseLink)`
  color: #fff;
  background: var(--accent);
`;

export const SecondaryLink = styled(BaseLink)`
  color: var(--text-h);
  background: var(--muted);
`;

export const Stats = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Stat = styled.article`
  display: grid;
  gap: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);

  strong {
    color: var(--text-h);
  }

  span {
    color: var(--text-soft);
    font-size: 14px;
  }
`;
