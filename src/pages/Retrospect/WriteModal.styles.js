export const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000,
  },
  modalBox: {
    backgroundColor: '#fff',
    width: '550px',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px'
  },
  closeBtn: {
    background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
  },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '14px', fontWeight: '600', color: '#495057' },
  input: { padding: '10px', borderRadius: '8px', border: '1px solid #ced4da', fontSize: '14px' },
  select: { padding: '10px', borderRadius: '8px', border: '1px solid #ced4da', fontSize: '14px' },
  textarea: { padding: '12px', borderRadius: '8px', border: '1px solid #ced4da', minHeight: '120px', fontSize: '14px', resize: 'none' },
  uploadSection: { display: 'flex', gap: '15px', padding: '10px 0' },
  fileInputWrapper: { display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, fontSize: '12px' },
  fileLabel: { fontWeight: '600', color: '#6b9e78' },
  submitBtn: {
    backgroundColor: '#333', color: '#fff', padding: '12px', borderRadius: '8px',
    border: 'none', fontWeight: '600', cursor: 'pointer', marginTop: '10px'
  }
};