import { useState } from 'react';
import mainLogoImg from '../../assets/LOGO(main).png';
import { notices } from '../notice/noticeData.js';
import { dummyPosts } from '../Retrospect/retrospectApi.js';
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

const communityPosts = [
  {
    id: 'community-1',
    title: '2026년 1학기 정기봉사처 모집 안내',
    content:
      '안녕하세요 경북대학교 컴퓨터학부 교육봉사동아리 L&C입니다. 2026년 1학기 정기봉사처 봉사자 모집을 21일부터 시작하여 ...',
  },
  {
    id: 'community-2',
    title: '새 학기 활동 준비물 공유',
    content:
      '첫 봉사 활동 전 준비하면 좋은 자료와 참고 링크를 공유합니다. 필요한 자료를 확인해 주세요 ...',
  },
];

const previewCards = [
  {
    id: 'notice',
    category: '공지',
    action: '공지 확인하기',
    listPath: '/notice',
    posts: notices.slice(0, 3).map((notice) => ({
      title: notice.title,
      description:
        '안녕하세요 경북대학교 컴퓨터학부 교육봉사동아리 L&C입니다. 자세한 공지 내용을 확인해 주세요 ...',
      detailPath: `/notice/${notice.id}`,
    })),
  },
  {
    id: 'community',
    category: '자유게시판',
    action: '게시글 확인하기',
    listPath: '/community',
    posts: communityPosts.map((post) => ({
      title: post.title,
      description: post.content,
      detailPath: `/community/${post.id}`,
    })),
  },
  {
    id: 'retrospect',
    category: '회고',
    action: '회고 확인하기',
    listPath: '/retrospect',
    posts: dummyPosts.slice(0, 3).map((post) => ({
      title: post.title,
      description: post.content,
      detailPath: `/retrospect/${post.id}`,
    })),
  },
];

export function HomePage() {
  const [activePostIndexes, setActivePostIndexes] = useState(() =>
    Object.fromEntries(previewCards.map((card) => [card.id, 0])),
  );

  const movePost = (cardId, direction) => {
    const card = previewCards.find((item) => item.id === cardId);

    if (!card) return;

    setActivePostIndexes((currentIndexes) => {
      const currentIndex = currentIndexes[cardId] ?? 0;
      const nextIndex =
        (currentIndex + direction + card.posts.length) % card.posts.length;

      return {
        ...currentIndexes,
        [cardId]: nextIndex,
      };
    });
  };

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
        {previewCards.map((card) => {
          const activePost = card.posts[activePostIndexes[card.id] ?? 0];

          return (
            <MainCard key={card.category}>
              <CardHeader>{card.category}</CardHeader>
              <CardBody>
                <SliderButton
                  type="button"
                  aria-label="이전 게시글"
                  onClick={() => movePost(card.id, -1)}
                >
                  &lt;
                </SliderButton>
                <div>
                  <CardTitle to={activePost.detailPath}>
                    {activePost.title}
                  </CardTitle>
                  <p>{activePost.description}</p>
                </div>
                <SliderButton
                  type="button"
                  aria-label="다음 게시글"
                  onClick={() => movePost(card.id, 1)}
                >
                  &gt;
                </SliderButton>
              </CardBody>
              <CardDivider />
              <CardAction to={card.listPath}>{card.action}</CardAction>
            </MainCard>
          );
        })}
      </Cards>
    </Page>
  );
}
