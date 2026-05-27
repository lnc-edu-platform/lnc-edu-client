import { useState } from 'react';
import { venueStyles as s } from './VenuePage.styles.js';

const venues = [
  {
    id: 1,
    name: '산격중학교',
    type: '중학교',
    location: '대구 북구',
    day: '화',
    time: '16:00–17:30',
    mentorCount: 6,
    mentorMax: 8,
    isNew: false,
    tags: ['정기 봉사', '중학교'],
    rating: 4.8,
    semester: '9',
    description: '대구 북구 산격동에 위치한 중학교. 매주 화요일 방과후에 자율동아리 형태로 코딩 멘토링을 진행해요. 학생 인원은 16명, 멘토는 8명 정원입니다.',
    schedule: { day: '매주 화 16:00 — 17:30', target: '중학교 1·2학년 (혼합반)' },
    place: '학교 컴퓨터실 (B관 3층)',
    tool: '스크래치 → 파이썬 입문',
    address: '대구 북구 대학로 80',
    recentLogs: [
      { title: '9주차 — 변수 개념을 다시 풀어쓰기', author: '김지원', date: '5/12' },
      { title: '8주차 — 첫 미니프로젝트 진행', author: '박서연', date: '5/05' },
      { title: '7주차 — 학생별 진도 체크하기', author: '정유나', date: '4/28' },
    ],
  },
  {
    id: 2,
    name: '침산초등학교',
    type: '초등학교',
    location: '대구 북구',
    day: '수',
    time: '14:30–15:30',
    mentorCount: 4,
    mentorMax: 6,
    isNew: false,
    tags: ['정기 봉사', '초등학교'],
    rating: 4.5,
    semester: '5',
    description: '대구 북구 침산동에 위치한 초등학교. 매주 수요일 방과후 스크래치 블록코딩을 중심으로 수업을 진행합니다.',
    schedule: { day: '매주 수 14:30 — 15:30', target: '초등학교 4학년' },
    place: '컴퓨터실 (본관 2층)',
    tool: '스크래치',
    address: '대구 북구 침산로 45',
    recentLogs: [
      { title: '5주차 — 블록코딩으로 게임 만들기', author: '이세빈', date: '5/10' },
      { title: '4주차 — 반복문 개념 익히기', author: '김지원', date: '5/03' },
    ],
  },
  {
    id: 3,
    name: '태전중학교',
    type: '중학교',
    location: '대구 북구',
    day: '목',
    time: '15:30–17:00',
    mentorCount: 5,
    mentorMax: 6,
    isNew: false,
    tags: ['정기 봉사', '중학교'],
    rating: 4.6,
    semester: '6',
    description: '대구 북구 태전동에 위치한 중학교. 파이썬 기초 문법과 알고리즘 사고력을 키우는 수업을 진행합니다.',
    schedule: { day: '매주 목 15:30 — 17:00', target: '중학교 2학년' },
    place: '과학실 (2관 4층)',
    tool: '파이썬',
    address: '대구 북구 태전로 12',
    recentLogs: [
      { title: '6주차 — 함수와 모듈 소개', author: '박서연', date: '5/09' },
    ],
  },
  {
    id: 4,
    name: '복현초등학교',
    type: '초등학교',
    location: '대구 북구',
    day: '수',
    time: '14:00–15:00',
    mentorCount: 3,
    mentorMax: 6,
    isNew: false,
    tags: ['정기 봉사', '초등학교'],
    rating: 4.3,
    semester: '4',
    description: '대구 북구 복현동에 위치한 초등학교. 엔트리를 활용한 기초 코딩 교육을 진행합니다.',
    schedule: { day: '매주 수 14:00 — 15:00', target: '초등학교 5학년' },
    place: '컴퓨터실 (본관 3층)',
    tool: '엔트리',
    address: '대구 북구 복현로 33',
    recentLogs: [],
  },
  {
    id: 5,
    name: '북구 청소년문화의집',
    type: '기관',
    location: '대구 북구',
    day: '토',
    time: '10:00–12:00',
    mentorCount: 2,
    mentorMax: 4,
    isNew: true,
    tags: ['정기 봉사', '기관'],
    rating: 4.1,
    semester: '2',
    description: '대구 북구 청소년문화의집에서 진행하는 주말 코딩 교실입니다. 다양한 연령대의 청소년을 대상으로 합니다.',
    schedule: { day: '매주 토 10:00 — 12:00', target: '중·고등학생 혼합' },
    place: '3층 디지털 교육실',
    tool: '파이썬, 앱인벤터',
    address: '대구 북구 문화로 21',
    recentLogs: [],
  },
  {
    id: 6,
    name: '대구 SW체험',
    type: '행사',
    location: '엑스코',
    day: '',
    time: '',
    mentorCount: 12,
    mentorMax: 16,
    isNew: false,
    tags: ['행사'],
    rating: 4.9,
    semester: '연 2회',
    description: '엑스코에서 연 2회 진행되는 대규모 SW체험 행사입니다. 부스 운영 형태로 진행되며 많은 학생들을 만날 수 있어요.',
    schedule: { day: '4·10월 (연 2회)', target: '초·중·고 전체' },
    place: '엑스코 전시홀',
    tool: '다양한 SW 도구',
    address: '대구 북구 엑스코로 10',
    recentLogs: [
      { title: '부스 운영, 학생 130명을 만난 토요일', author: '이세빈', date: '5/05' },
    ],
  },
];

const FILTERS = ['전체', '초등학교', '중학교', '고등학교', '기관', '행사'];

const VenuePage = () => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [selectedId, setSelectedId] = useState(null);

  const filtered = activeFilter === '전체'
    ? venues
    : venues.filter(v => v.type === activeFilter);

  const selectedVenue = venues.find(v => v.id === selectedId);

  const handleSelect = (id) => {
    setSelectedId(prev => prev === id ? null : id);
  };

  return (
    <div style={s.page}>
      {/* 헤더 */}
      <div style={{ ...s.header, maxWidth: selectedId ? '100%' : '900px', margin: '0 auto' }}>
        <p style={s.label}>VENUES</p>
        <h1 style={s.title}>봉사처 소개</h1>
        <p style={s.desc}>대구 지역 협력 학교·기관 28곳을 한 곳에 모았어요</p>
        <div style={s.filterRow}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setSelectedId(null); }}
              style={{ ...s.filterBtn, ...(activeFilter === f ? s.filterBtnActive : {}) }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* 본문 */}
      <div style={{ ...s.body, justifyContent: selectedId ? 'flex-start' : 'center' }}>
        {/* 목록 */}
        <div style={{ ...s.listCol, maxWidth: selectedId ? '460px' : '900px' }}>
          {filtered.map(v => (
            <div
              key={v.id}
              onClick={() => handleSelect(v.id)}
              style={{ ...s.card, ...(selectedId === v.id ? s.cardActive : {}) }}
            >
              <div style={s.thumb}>
                <span style={s.thumbText}>로고</span>
              </div>
              <div style={s.cardBody}>
                <div style={s.cardTop}>
                  <span style={{ ...s.typeBadge, ...s.typeBadgeColor(v.type) }}>
                    {v.type}
                  </span>
                  {v.isNew && <span style={s.newBadge}>NEW</span>}
                </div>
                <p style={s.cardName}>{v.name}</p>
                <div style={s.cardMeta}>
                  <span>🏠 {v.location}</span>
                  {v.day && <span>📅 {v.day} {v.time}</span>}
                </div>
              </div>
              <div style={s.mentorBox}>
                <span style={s.mentorLabel}>멘토</span>
                <span style={s.mentorCount}>{v.mentorCount} / {v.mentorMax}</span>
                <span style={s.mentorSub}>명</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: '#adb5bd', padding: '60px 0' }}>
              해당 유형의 봉사처가 없습니다.
            </p>
          )}
        </div>

        {/* 상세 패널 */}
        {selectedVenue && (
          <div style={s.detailCol}>
            <div style={s.detailThumb}>
              <span style={{ color: '#adb5bd', fontSize: '14px' }}>봉사처 대표 사진</span>
            </div>
            <div style={s.detailBox}>
              <div style={s.detailTagRow}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {selectedVenue.tags.map(t => (
                    <span key={t} style={s.detailTag}>{t}</span>
                  ))}
                </div>
                <span style={s.rating}>★ {selectedVenue.rating} · {selectedVenue.semester}기</span>
              </div>
              <h2 style={s.detailName}>{selectedVenue.name}</h2>
              <p style={s.detailDesc}>{selectedVenue.description}</p>
              <div style={s.infoGrid}>
                <div style={s.infoCell}>
                  <p style={s.infoLabel}>요일·시간</p>
                  <p style={s.infoValue}>{selectedVenue.schedule.day}</p>
                </div>
                <div style={s.infoCell}>
                  <p style={s.infoLabel}>대상</p>
                  <p style={s.infoValue}>{selectedVenue.schedule.target}</p>
                </div>
                <div style={s.infoCell}>
                  <p style={s.infoLabel}>장소</p>
                  <p style={s.infoValue}>{selectedVenue.place}</p>
                </div>
                <div style={s.infoCell}>
                  <p style={s.infoLabel}>도구</p>
                  <p style={s.infoValue}>{selectedVenue.tool}</p>
                </div>
              </div>
              <div style={s.mapBox}>
                <span style={{ color: '#adb5bd', fontSize: '13px' }}>📍 {selectedVenue.address}</span>
              </div>
              <div style={s.logSection}>
                <div style={s.logHeader}>
                  <span style={s.logTitle}>최근 회고</span>
                  <span style={s.logMore}>전체 보기 &gt;</span>
                </div>
                {selectedVenue.recentLogs.length > 0 ? (
                  selectedVenue.recentLogs.map((log, i) => (
                    <div key={i} style={s.logRow}>
                      <span style={s.logText}>{log.title}</span>
                      <div style={s.logMeta}>
                        <span>{log.author}</span>
                        <span style={{ color: '#adb5bd' }}>{log.date}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#adb5bd', fontSize: '13px', padding: '12px 0' }}>
                    아직 작성된 회고가 없습니다.
                  </p>
                )}
              </div>
              <div style={s.detailFooter}>
                <div>
                  <p style={s.mentorCountBig}>멘토 {selectedVenue.mentorCount} / {selectedVenue.mentorMax}명</p>
                  <p style={{ fontSize: '12px', color: '#adb5bd', margin: 0 }}>
                    {selectedVenue.mentorMax - selectedVenue.mentorCount}자리 남았어요
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={s.btnOutline}>자료실</button>
                  <button style={s.btnPrimary}>신청하기 →</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenuePage;
