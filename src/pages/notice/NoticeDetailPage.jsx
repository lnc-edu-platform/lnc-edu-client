import { Link, Navigate, useParams } from 'react-router-dom';
import {
  AttachmentCard,
  AttachmentItem,
  AttachmentList,
  DetailActions,
  DetailBody,
  DetailFooter,
  DetailHeader,
  DetailMeta,
  DetailPageFrame,
  FileButton,
  LikeButton,
  NavButton,
  Tag,
  UtilityButton,
} from './NoticeDetailPage.styles.js';
import { notices } from './noticeData.js';

const attachments = [
  {
    name: '2026학기_정기봉사처_안내.pdf',
    size: '842KB',
  },
  {
    name: '신청서-양식_v2.docx',
    size: '39KB',
  },
];

export function NoticeDetailPage() {
  const { noticeId } = useParams();
  const notice = notices.find((item) => item.id === noticeId);

  if (!notice) {
    return <Navigate to="/notice" replace />;
  }

  return (
    <DetailPageFrame>
      <DetailHeader>
        <div>
          <Tag>{notice.category}</Tag>
          <Tag $light>공지</Tag>
        </div>
        <h1>{notice.title}</h1>
        <DetailMeta>
          <span>L&C 운영진</span>
          <span>{notice.fullDate}</span>
          <span>조회 {notice.views}</span>
        </DetailMeta>
        <DetailActions>
          <UtilityButton type="button">♡ 좋아요 38</UtilityButton>
          <UtilityButton type="button">공유</UtilityButton>
        </DetailActions>
      </DetailHeader>

      <DetailBody>
        <p>
          안녕하세요, 경북대학교 컴퓨터학부 SW교육봉사 동아리 L&C입니다. 2026년
          1학기 정기봉사처 봉사자 모집을 5월 21일부터 시작합니다.
        </p>
        <p>
          활동은 근처 중학교를 대상으로 코딩 교육 멘토링을 진행하게 되며, 아래
          일정을 확인하시고 신청 폼을 작성해 주세요.
        </p>
        <strong>일정</strong>
        <ul>
          <li>모집 기간: 2026.05.21 - 2026.05.30</li>
          <li>면접 발표: 2026.06.04</li>
          <li>오리엔테이션: 2026.06.10 19:00</li>
        </ul>
        <strong>유의사항</strong>
        <ul>
          <li>학기 중 매주 1회 이상 봉사가 가능한 분만 신청해 주세요.</li>
          <li>봉사처별 세부 일정은 추후 공지됩니다.</li>
          <li>공동 디스코드 채널에서 활동 안내가 진행됩니다.</li>
        </ul>
      </DetailBody>

      <AttachmentCard>
        <strong>첨부파일 2</strong>
        <AttachmentList>
          {attachments.map((file) => (
            <AttachmentItem key={file.name}>
              <span>🔗 {file.name}</span>
              <small>{file.size}</small>
              <FileButton type="button">다운로드</FileButton>
            </AttachmentItem>
          ))}
        </AttachmentList>
      </AttachmentCard>

      <LikeButton type="button">♡ 도움이 되었어요 38</LikeButton>

      <DetailFooter>
        <NavButton as={Link} to="/notice/notice-2">
          이전글
        </NavButton>
        <NavButton as={Link} to="/notice">
          목록
        </NavButton>
        <NavButton as={Link} to="/notice/notice-2">
          다음글
        </NavButton>
      </DetailFooter>
    </DetailPageFrame>
  );
}
