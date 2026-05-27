import styled from 'styled-components';

export const NoticePageFrame = styled.section`
  padding: 16px 156px 40px;
  background: var(--surface);

  @media (max-width: 980px) {
    padding: 16px 50px 40px;
  }

  @media (max-width: 640px) {
    padding: 16px 24px 40px;
  }
`;

export const TitleArea = styled.header`
  display: grid;
  justify-items: center;
  gap: 6px;
  margin-bottom: 30px;
  text-align: center;

  span {
    color: var(--primary);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 0;
    color: #000;
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    color: var(--text-soft);
    font-size: 11px;
  }
`;

export const NoticeBoard = styled.div`
  width: min(100%, 1576px);
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--surface);
  box-shadow: 0 8px 24px rgba(25, 25, 25, 0.08);
`;

export const NoticeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const NoticeHeader = styled.th`
  width: ${({ $narrow, $small }) => {
    if ($narrow) return '70px';
    if ($small) return '92px';
    return 'auto';
  }};
  height: 40px;
  padding: 0 14px;
  color: var(--text-soft);
  background: #fbfcfb;
  font-size: 12px;
  font-weight: 700;
  text-align: ${({ $narrow, $small }) =>
    $narrow || $small ? 'center' : 'left'};
  border-bottom: 1px solid var(--border);
`;

export const NoticeCell = styled.td`
  height: 48px;
  padding: 0 14px;
  color: ${({ $title }) => ($title ? 'var(--text-h)' : 'var(--text-soft)')};
  font-size: 12px;
  font-weight: ${({ $title }) => ($title ? 700 : 500)};
  text-align: ${({ $narrow, $small }) =>
    $narrow || $small ? 'center' : 'left'};
  border-bottom: 1px solid #edf0ed;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  tr:last-child & {
    border-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: var(--primary);
  }
`;

export const PinBadge = styled.span`
  min-width: 34px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fff;
  background: var(--primary);
  font-size: 10px;
  font-weight: 800;
`;

export const CategoryBadge = styled.span`
  min-width: 34px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text);
  background: var(--surface);
  font-size: 10px;
  font-weight: 600;
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PageButton = styled.button`
  min-width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ $active }) => ($active ? 'var(--primary)' : 'var(--border)')};
  border-radius: 6px;
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text)')};
  background: ${({ $active }) =>
    $active ? 'var(--primary)' : 'var(--surface)'};
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
  }
`;
