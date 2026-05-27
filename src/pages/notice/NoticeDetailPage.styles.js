import styled from 'styled-components';

export const DetailPageFrame = styled.article`
  width: min(100%, 720px);
  margin: 0 auto;
  padding: 48px 0 40px;
`;

export const DetailHeader = styled.header`
  position: relative;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);

  h1 {
    margin: 14px 0 16px;
    color: #000;
    font-size: 28px;
    font-weight: 800;
    line-height: 1.35;
  }
`;

export const Tag = styled.span`
  height: 24px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 999px;
  color: ${({ $light }) => ($light ? 'var(--text)' : '#fff')};
  background: ${({ $light }) => ($light ? 'var(--muted)' : 'var(--primary)')};
  font-size: 12px;
  font-weight: 800;

  & + & {
    margin-left: 6px;
  }
`;

export const DetailMeta = styled.div`
  display: flex;
  gap: 12px;
  color: var(--text-soft);
  font-size: 12px;
`;

export const DetailActions = styled.div`
  position: absolute;
  right: 0;
  bottom: 24px;
  display: flex;
  gap: 8px;
`;

export const UtilityButton = styled.button`
  height: 30px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  background: var(--surface);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
`;

export const DetailBody = styled.div`
  display: grid;
  gap: 14px;
  padding: 28px 0;
  color: var(--text);
  font-size: 14px;
  line-height: 1.75;

  strong {
    margin-top: 4px;
    color: #000;
    font-size: 15px;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }
`;

export const AttachmentCard = styled.section`
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(25, 25, 25, 0.08);

  > strong {
    display: block;
    margin-bottom: 10px;
    color: var(--text-soft);
    font-size: 12px;
  }
`;

export const AttachmentList = styled.div`
  display: grid;
  gap: 8px;
`;

export const AttachmentItem = styled.div`
  min-height: 40px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 12px;
  padding: 0 10px;
  border-radius: 8px;
  background: var(--muted);
  font-size: 12px;

  small {
    color: var(--text-soft);
  }
`;

export const FileButton = styled.button`
  height: 26px;
  padding: 0 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
`;

export const LikeButton = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px auto 0;
  padding: 0 18px;
  border: 1px solid var(--primary);
  border-radius: 999px;
  color: var(--primary);
  background: var(--primary-soft);
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

export const DetailFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
`;

export const NavButton = styled.button`
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  background: var(--surface);
  font: inherit;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;
