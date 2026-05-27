import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: grid;
`;

export const Banner = styled.section`
  min-height: 286px;
  display: grid;
  background: rgba(251, 243, 213, 0.1);
  grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr);
  align-items: center;
  gap: 48px;
  padding: 0 72px;
  border-bottom: 1px solid var(--border);
  box-shadow:
    inset 0 4px 4px 0 rgba(0, 0, 0, 0.15),
    inset 0 -4px 10px 0 rgba(0, 0, 0, 0.15);

  @media (max-width: 900px) {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 52px 28px;
    text-align: center;
  }
`;

export const BannerTitle = styled.h1`
  margin: 0;
  color: #000;
  font-size: 50px;
  font-weight: 800;
  line-height: 1.45;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

export const BannerLogo = styled.img`
  width: min(100%, 560px);
  justify-self: end;
  display: block;

  @media (max-width: 900px) {
    justify-self: center;
  }
`;

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 50px;
  padding: 60px 96px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding: 48px 50px;
  }

  @media (max-width: 640px) {
    padding: 36px 24px;
  }
`;

export const MainCard = styled.article`
  min-height: 268px;
  display: flex;
  flex-direction: column;
  padding: 16px 18px 28px;
  border: 2px solid var(--primary);
  border-radius: 10px;
  background: var(--surface);
`;

export const CardHeader = styled.strong`
  color: var(--text-soft);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export const CardBody = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 8px;
  text-align: center;

  p {
    max-width: 268px;
    margin: 16px auto 0;
    color: var(--text-soft);
    font-size: 11px;
    line-height: 1.35;
  }
`;

export const SliderButton = styled.button`
  width: 24px;
  height: 44px;
  border: 0;
  color: var(--primary);
  background: transparent;
  font-size: 34px;
  font-weight: 300;
  line-height: 1;
  cursor: pointer;
`;

export const CardTitle = styled(Link)`
  display: block;
  margin: 0;
  color: var(--text-h);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  text-decoration: none;

  &:hover {
    color: var(--primary);
  }
`;

export const CardDivider = styled.div`
  height: 1px;
  margin: 0 0 16px;
  background: var(--border);
`;

export const CardAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  align-self: center;
  border: 0;
  color: var(--primary);
  background: transparent;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  &::before {
    content: '✓';
    width: 26px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary);
    border-radius: 50%;
    font-size: 18px;
    line-height: 1;
  }
`;
