export const cardStyles = {
  cardContainer: {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '16px',          // 시안의 부드러운 라운딩
    overflow: 'hidden',            // 상단 이미지 구역도 같이 깎이도록 설정
    display: 'flex',
    flexDirection: 'column',
    height: '420px',               // 세로로 길쭉한 카드 전체 높이 고정
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  
  // 1. 상단 미리보기/썸네일 구역
  thumbnailZone: {
    width: '100%',
    height: '180px',               // 상단 영역 고정 높이
    backgroundColor: '#f8f9fa',    // 기본 연회색 배경
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  thumbnailImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // 이미지가 없을 때 뜨는 커다란 학교 글씨 스타일 (시안의 3번째, 5번째 카드 느낌)
  fallbackText: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#adb5bd',              // 은은한 회색 대형 글자
    letterSpacing: '-0.5px',
  },

  // 2. 하단 정보 구역 (흰색 배경)
  infoZone: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,                       // 남은 여백 다 차지
    justifyContent: 'space-between' // 내용물 위아래 배치
  },
  
  // 태그들을 감싸는 가로 줄
  tagContainer: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    marginBottom: '12px',
  },
  tag: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#495057',
    backgroundColor: '#f1f3f5',
    padding: '4px 10px',
    borderRadius: '20px',          // 완벽한 알약 모양 태그
  },

  // 제목 및 본문
  title: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#212529',
    margin: '0 0 8px 0',
    lineHeight: '1.4',
    // 1줄 초과 시 말줄임 처리
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  content: {
    fontSize: '13px',
    color: '#495057',
    margin: '0 0 16px 0',
    lineHeight: '1.6',
    // 딱 2줄만 보여주고 말줄임(...) 처리하는 마법의 속성
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },

  // 3. 맨 아래 푸터 (작성자 정보 + 하트 수)
  footer: {
    display: 'flex',
    justifyContent: 'space-between', // 양옆 끝으로 찢기
    alignItems: 'center',
    paddingTop: '14px',
    borderTop: '1px solid #f1f3f5', // 얇은 구분선
  },
  authorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  avatar: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#dee2e6',    // 동그란 프로필 임시 배경
  },
  authorName: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#343a40',
  },
  dateText: {
    fontSize: '12px',
    color: '#868e96',
  },
  
  // 하트 수 구역
  likeBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#868e96',
  },
  heartIcon: {
    color: '#ff6b6b',              // 붉은 계열 하트
  }
};