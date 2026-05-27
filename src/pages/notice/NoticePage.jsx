import { Link } from 'react-router-dom';
import {
  CategoryBadge,
  NoticeBoard,
  NoticeCell,
  NoticeHeader,
  NoticePageFrame,
  NoticeTable,
  PageButton,
  Pagination,
  PinBadge,
  TitleArea,
} from './NoticePage.styles.js';
import { notices } from './noticeData.js';

const ITEMS_PER_PAGE = 8;

export function NoticePage() {
  const totalPages = Math.ceil(notices.length / ITEMS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, index) =>
    String(index + 1),
  );

  return (
    <NoticePageFrame>
      <TitleArea>
        <span>NOTICE</span>
        <h1>공지사항</h1>
        <p>운영진이 전하는 모임 일정&공지안내</p>
      </TitleArea>

      <NoticeBoard>
        <NoticeTable>
          <thead>
            <tr>
              <NoticeHeader $narrow>번호</NoticeHeader>
              <NoticeHeader>제목</NoticeHeader>
              <NoticeHeader $small>분류</NoticeHeader>
              <NoticeHeader $small>작성자</NoticeHeader>
              <NoticeHeader $small>날짜</NoticeHeader>
              <NoticeHeader $small>조회</NoticeHeader>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <NoticeCell $narrow>
                  {notice.pinned ? (
                    <PinBadge>{notice.number}</PinBadge>
                  ) : (
                    notice.number
                  )}
                </NoticeCell>
                <NoticeCell $title>
                  <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
                </NoticeCell>
                <NoticeCell $small>
                  <CategoryBadge>{notice.category}</CategoryBadge>
                </NoticeCell>
                <NoticeCell $small>{notice.author}</NoticeCell>
                <NoticeCell $small>{notice.date}</NoticeCell>
                <NoticeCell $small>{notice.views}</NoticeCell>
              </tr>
            ))}
          </tbody>
        </NoticeTable>
      </NoticeBoard>

      <Pagination aria-label="공지사항 페이지 이동">
        <PageButton type="button" aria-label="이전 페이지">
          &lt;
        </PageButton>
        {pages.map((page) => (
          <PageButton key={page} type="button" $active={page === '1'}>
            {page}
          </PageButton>
        ))}
        <PageButton type="button" aria-label="다음 페이지">
          &gt;
        </PageButton>
      </Pagination>
    </NoticePageFrame>
  );
}
