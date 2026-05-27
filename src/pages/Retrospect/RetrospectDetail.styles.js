export const detailStyles = {
  wrapper: { backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '60px' },
  navHeader: { maxWidth: '800px', margin: '0 auto', padding: '20px 0' },
  backBtn: { background: 'none', border: 'none', color: '#495057', fontSize: '14px', cursor: 'pointer', fontWeight: '500' },
  container: {
    maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff',
    borderRadius: '24px', padding: '40px', border: '1px solid #e9ecef'
  },
  tagContainer: { display: 'flex', gap: '6px', marginBottom: '16px' },
  tag: { fontSize: '12px', fontWeight: '600', color: '#495057', backgroundColor: '#f1f3f5', padding: '4px 12px', borderRadius: '20px' },
  title: { fontSize: '32px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.3', margin: '0 0 20px 0' },
  metaBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #eee', marginBottom: '30px' },
  authorBox: { display: 'flex', alignItems: 'center', gap: '12px' },
  avatar: { width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#dee2e6' },
  authorName: { fontSize: '14px', fontWeight: '700', color: '#333' },
  dateText: { fontSize: '12px', color: '#868e96', marginTop: '2px' },
  actionBox: { display: 'flex', gap: '8px' },
  actionBtn: { padding: '8px 16px', borderRadius: '8px', border: '1px solid #dee2e6', backgroundColor: '#fff', fontSize: '13px', cursor: 'pointer', fontWeight: '500' },
  contentBody: {
    fontSize: '16px', color: '#212529', lineHeight: '1.7',
    h3: { marginTop: '28px', fontSize: '18px', fontWeight: '700' }
  },
  // 초록색 인용구 박스 스타일링
  quoteBox: {
    borderLeft: '4px solid #6b9e78', backgroundColor: '#fdfdfd',
    padding: '16px 20px', margin: '20px 0', color: '#495057', fontStyle: 'normal', fontSize: '15px'
  },
  bodyImagePlaceholder: {
    width: '100%', height: '240px', backgroundColor: '#eaeaea', borderRadius: '12px',
    display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#868e96',
    fontSize: '14px', margin: '24px 0', border: '1px dashed #ced4da'
  },
  // 하단 첨부파일 전용 박스 디자인
  fileSection: { marginTop: '40px', padding: '24px', border: '1px dashed #ced4da', borderRadius: '16px', backgroundColor: '#fafafa' },
  fileTitle: { fontSize: '14px', fontWeight: '700', color: '#495057', marginBottom: '14px' },
  fileGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  fileCard: {
    backgroundColor: '#fff', border: '1px solid #e9ecef', borderRadius: '8px',
    padding: '12px 16px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '500'
  }
};