import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogoImg from '../../assets/LOGO(main).png';
import {
  Banner,
  BannerLogo,
  BannerTitle,
  CardAction,
  CardBody,
  CardDivider,
  CardHeader,
  CardTitle,
  Cards,
  MainCard,
  Page,
  SliderButton,
} from './HomePage.styles.js';

// 데이터 임포트
import { notices } from '../notice/noticeData.js';
import { fetchReflections } from '../Retrospect/retrospectApi.js';
import { useAuth } from '../../context/AuthContext.jsx';

const dummyCommunity = [
  {
    id: 'comm-1',
    title: '동아리 방 비밀번호 변경 안내',
    description: '이번 학기부터 동아리 방 비밀번호가 변경되었습니다. 단톡방 공지를 확인해주세요.',
  },
  {
    id: 'comm-2',
    title: '신입생 환영회 장소 투표',
    description: '다음 주 목요일 신입생 환영회 장소를 투표받고 있습니다. 많은 참여 부탁드립니다.',
  },
];

export function HomePage() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  // 각 카테고리별 데이터 및 인덱스 상태 관리
  const [noticeIdx, setNoticeIdx] = useState(0);
  const [communityIdx, setCommunityIdx] = useState(0);
  const [retrospectIdx, setRetrospectIdx] = useState(0);
  const [reflections, setReflections] = useState([]);

  // 회고 데이터 로드
  useEffect(() => {
    const loadReflections = async () => {
      const { data } = await fetchReflections(accessToken);
      if (data) setReflections(data);
    };
    loadReflections();
  }, [accessToken]);

  // 슬라이더 핸들러
  const handlePrev = (category, length) => {
    if (length <= 1) return;
    if (category === 'notice') setNoticeIdx((prev) => (prev - 1 + length) % length);
    if (category === 'community') setCommunityIdx((prev) => (prev - 1 + length) % length);
    if (category === 'retrospect') setRetrospectIdx((prev) => (prev - 1 + length) % length);
  };

  const handleNext = (category, length) => {
    if (length <= 1) return;
    if (category === 'notice') setNoticeIdx((prev) => (prev + 1) % length);
    if (category === 'community') setCommunityIdx((prev) => (prev + 1) % length);
    if (category === 'retrospect') setRetrospectIdx((prev) => (prev + 1) % length);
  };

  // 현재 표시할 데이터 계산
  const currentNotice = notices[noticeIdx] || {};
  const currentCommunity = dummyCommunity[communityIdx] || {};
  const currentRetrospect = reflections[retrospectIdx] || { title: '회고를 불러오는 중...', content: '' };

  const cards = [
    {
      type: 'notice',
      category: '공지',
      title: currentNotice.title,
      description: currentNotice.description || '공지사항 상세 내용을 확인하세요.',
      action: '공지 확인하기',
      link: '/notice',
      detailLink: `/notice/${currentNotice.id}`,
      length: notices.length,
    },
    {
      type: 'community',
      category: '자유게시판',
      title: currentCommunity.title,
      description: currentCommunity.description,
      action: '게시글 확인하기',
      link: '/community',
      detailLink: `/community/${currentCommunity.id}`,
      length: dummyCommunity.length,
    },
    {
      type: 'retrospect',
      category: '회고',
      title: currentRetrospect.title,
      description: currentRetrospect.content?.substring(0, 100) + '...',
      action: '회고 확인하기',
      link: '/retrospect',
      detailLink: `/retrospect/${currentRetrospect.id}`,
      length: reflections.length,
    },
  ];

  return (
    <Page>
      <Banner>
        <BannerTitle>
          방문을 환영합니다,
          <br />
          L&C입니다.
        </BannerTitle>
        <BannerLogo src={mainLogoImg} alt="Lovely & Communication" />
      </Banner>

      <Cards>
        {cards.map((card) => (
          <MainCard key={card.type}>
            <CardHeader>{card.category}</CardHeader>
            <CardBody>
              <SliderButton 
                type="button" 
                aria-label="이전 게시글"
                onClick={() => handlePrev(card.type, card.length)}
              >
                &lt;
              </SliderButton>
              <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate(card.detailLink)}>
                <CardTitle>{card.title}</CardTitle>
                <p style={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontSize: '14px',
                  color: '#666',
                  marginTop: '10px'
                }}>
                  {card.description}
                </p>
              </div>
              <SliderButton 
                type="button" 
                aria-label="다음 게시글"
                onClick={() => handleNext(card.type, card.length)}
              >
                &gt;
              </SliderButton>
            </CardBody>
            <CardDivider />
            <CardAction type="button" onClick={() => navigate(card.link)}>
              {card.action}
            </CardAction>
          </MainCard>
        ))}
      </Cards>
    </Page>
  );
}
