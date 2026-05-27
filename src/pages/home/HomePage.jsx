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

const previewCards = [
  {
    category: '공지',
    title: '2026년 1학기 정기봉사처 모집 안내',
    description:
      '안녕하세요 경북대학교 컴퓨터학부 교육봉사동아리 L&C입니다. 2026년 1학기 정기봉사처 봉사자 모집을 21일부터 시작하여 ...',
    action: '공지 확인하기',
  },
  {
    category: '자유게시판',
    title: '2026년 1학기 정기봉사처 모집 안내',
    description:
      '안녕하세요 경북대학교 컴퓨터학부 교육봉사동아리 L&C입니다. 2026년 1학기 정기봉사처 봉사자 모집을 21일부터 시작하여 ...',
    action: '게시글 확인하기',
  },
  {
    category: '회고',
    title: '2026년 1학기 정기봉사처 모집 안내',
    description:
      '안녕하세요 경북대학교 컴퓨터학부 교육봉사동아리 L&C입니다. 2026년 1학기 정기봉사처 봉사자 모집을 21일부터 시작하여 ...',
    action: '회고 확인하기',
  },
];

export function HomePage() {
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
        {previewCards.map((card) => (
          <MainCard key={card.category}>
            <CardHeader>{card.category}</CardHeader>
            <CardBody>
              <SliderButton type="button" aria-label="이전 게시글">
                &lt;
              </SliderButton>
              <div>
                <CardTitle>{card.title}</CardTitle>
                <p>{card.description}</p>
              </div>
              <SliderButton type="button" aria-label="다음 게시글">
                &gt;
              </SliderButton>
            </CardBody>
            <CardDivider />
            <CardAction type="button">{card.action}</CardAction>
          </MainCard>
        ))}
      </Cards>
    </Page>
  );
}
