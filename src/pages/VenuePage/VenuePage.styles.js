const typeColor = {
  '초등학교': { background: '#e8f5e9', color: '#2e7d32' },
  '중학교':   { background: '#e3f2fd', color: '#1565c0' },
  '고등학교': { background: '#fce4ec', color: '#c62828' },
  '기관':     { background: '#fff3e0', color: '#e65100' },
  '행사':     { background: '#f3e5f5', color: '#6a1b9a' },
};

export const venueStyles = {
  page: { backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '60px' },

  header: { padding: '32px 24px 0' },
  label: { fontSize: '12px', color: '#6b9e78', fontWeight: '700', letterSpacing: '1px', margin: '0 0 4px' },
  title: { fontSize: '28px', fontWeight: '800', color: '#1a1a1a', margin: '0 0 6px' },
  desc: { fontSize: '14px', color: '#868e96', margin: '0 0 20px' },

  filterRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' },
  filterBtn: {
    padding: '6px 16px', borderRadius: '20px', border: '1px solid #dee2e6',
    background: '#fff', fontSize: '13px', cursor: 'pointer', color: '#495057', fontWeight: '500',
  },
  filterBtnActive: { background: '#1a1a1a', color: '#fff', border: '1px solid #1a1a1a' },

  body: { display: 'flex', gap: '24px', padding: '0 24px', alignItems: 'flex-start' },
  listCol: { display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' },

  card: {
    display: 'flex', alignItems: 'center', gap: '16px',
    padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef',
    cursor: 'pointer', background: '#fff', transition: 'all 0.2s ease',
  },
  cardActive: { border: '1.5px solid #6b9e78', background: '#f8fdf9' },

  thumb: {
    width: '72px', height: '72px', borderRadius: '10px', background: '#f1f3f5',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  thumbText: { fontSize: '12px', color: '#adb5bd' },

  cardBody: { flex: 1 },
  cardTop: { display: 'flex', gap: '6px', marginBottom: '6px', alignItems: 'center' },
  typeBadge: { fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px' },
  typeBadgeColor: (type) => typeColor[type] ?? { background: '#f5f5f5', color: '#333' },
  newBadge: { fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', background: '#6b9e78', color: '#fff' },
  cardName: { fontSize: '15px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 6px' },
  cardMeta: { display: 'flex', gap: '12px', fontSize: '12px', color: '#868e96' },

  mentorBox: { textAlign: 'right', flexShrink: 0 },
  mentorLabel: { display: 'block', fontSize: '11px', color: '#adb5bd' },
  mentorCount: { fontSize: '18px', fontWeight: '800', color: '#1a1a1a' },
  mentorSub: { fontSize: '12px', color: '#adb5bd', marginLeft: '2px' },

  // 상세 패널
  detailCol: { flex: 1, minWidth: 0 },
  detailThumb: {
    width: '100%', height: '200px', background: '#f1f3f5', borderRadius: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
  },
  detailBox: { background: '#fff', border: '1px solid #e9ecef', borderRadius: '16px', padding: '28px' },
  detailTagRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  detailTag: { fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px', background: '#f1f3f5', color: '#495057' },
  rating: { fontSize: '13px', color: '#868e96', fontWeight: '500' },
  detailName: { fontSize: '26px', fontWeight: '800', color: '#1a1a1a', margin: '0 0 10px' },
  detailDesc: { fontSize: '14px', color: '#495057', lineHeight: '1.7', margin: '0 0 24px' },

  infoGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
    background: '#e9ecef', border: '1px solid #e9ecef',
    borderRadius: '12px', overflow: 'hidden', marginBottom: '16px',
  },
  infoCell: { background: '#fff', padding: '14px 16px' },
  infoLabel: { fontSize: '12px', color: '#adb5bd', margin: '0 0 4px', fontWeight: '600' },
  infoValue: { fontSize: '14px', color: '#1a1a1a', fontWeight: '700', margin: 0 },

  mapBox: {
    width: '100%', height: '100px', background: '#f8f9fa', borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid #e9ecef', marginBottom: '20px',
  },

  logSection: { marginBottom: '20px' },
  logHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  logTitle: { fontSize: '14px', fontWeight: '700', color: '#1a1a1a' },
  logMore: { fontSize: '13px', color: '#6b9e78', cursor: 'pointer', fontWeight: '600' },
  logRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 0', borderBottom: '1px solid #f1f3f5',
  },
  logText: { fontSize: '13px', color: '#333', fontWeight: '500' },
  logMeta: { display: 'flex', gap: '8px', fontSize: '12px', color: '#868e96', flexShrink: 0 },

  detailFooter: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingTop: '20px', borderTop: '1px solid #f1f3f5',
  },
  mentorCountBig: { fontSize: '15px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 2px' },
  btnOutline: {
    padding: '10px 20px', borderRadius: '8px', border: '1px solid #dee2e6',
    background: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer',
  },
  btnPrimary: {
    padding: '10px 20px', borderRadius: '8px', border: 'none',
    background: '#6b9e78', color: '#fff', fontSize: '14px', fontWeight: '700', cursor: 'pointer',
  },
};
