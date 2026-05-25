import styled from 'styled-components';

export const FooterFrame = styled.footer`
  border-top: 1px solid var(--border);
  background: var(--surface);
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 24px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--text-soft);
  font-size: 12px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: var(--primary);
  }
`;

export const FooterIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: var(--text-h);
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
  }

  span {
    font-size: 10px;
    line-height: 1;
  }
`;
