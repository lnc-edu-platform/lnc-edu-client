import {
  Hero,
  HeroActions,
  HeroCopy,
  Page,
  PrimaryLink,
  SecondaryLink,
  Stat,
  Stats,
} from './HomePage.styles.js';

export function HomePage() {
  return (
    <Page>
      <Hero>
        <HeroCopy>
          <p>Online learning workspace</p>
          <h1>학습 관리의 시작점</h1>
          <span>
            강의, 과제, 학습 현황을 한 곳에서 관리하는 교육 플랫폼
            프로젝트입니다.
          </span>
        </HeroCopy>
        <HeroActions>
          <PrimaryLink to="/login">로그인하기</PrimaryLink>
          <SecondaryLink to="/">둘러보기</SecondaryLink>
        </HeroActions>
      </Hero>

      <Stats>
        <Stat>
          <strong>Courses</strong>
          <span>강의 관리 영역</span>
        </Stat>
        <Stat>
          <strong>Progress</strong>
          <span>학습 진행률 영역</span>
        </Stat>
        <Stat>
          <strong>Assignments</strong>
          <span>과제 관리 영역</span>
        </Stat>
      </Stats>
    </Page>
  );
}
