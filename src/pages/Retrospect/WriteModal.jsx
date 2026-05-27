import { useState } from 'react';
import { modalStyles } from './WriteModal.styles.js';
import { createReflection } from './retrospectApi.js';
import { useAuth } from '../../context/AuthContext.jsx';

const WriteModal = ({ onClose, onUpload }) => {
  const { accessToken: token, user } = useAuth(); // ← Context에서 token + user 꺼내기

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('산격중');
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files).map((f) => ({
      name: f.name,
      size: (f.size / 1024).toFixed(1) + 'KB',
    }));
    setFiles(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }

    setIsSubmitting(true);
    // API에는 title + content만 전송, user는 폴백용으로 전달
    const { data } = await createReflection({ title, content }, token, user);
    setIsSubmitting(false);

    if (!data) {
      alert('회고 작성에 실패했습니다. 다시 시도해주세요.');
      return;
    }

    // 프론트 전용 필드 병합해서 카드에 즉시 반영
    const enriched = {
      ...data,
      category,
      tags: ['멘토링', category, '1주차'],
      likes: 0,
      imgUrl: image ?? null,
      attachedFiles: files,
    };

    onUpload(enriched);
    onClose();
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modalBox}>
        <div style={modalStyles.header}>
          <h2>새 회고 작성하기</h2>
          <button
            onClick={onClose}
            style={modalStyles.closeBtn}
            disabled={isSubmitting}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} style={modalStyles.form}>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>봉사처 구분</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={modalStyles.select}
            >
              <option value="산격중">산격중</option>
              <option value="침산초">침산초</option>
              <option value="태전중">태전중</option>
              <option value="복현초">복현초</option>
              <option value="행사">행사</option>
              <option value="운영">운영</option>
            </select>
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              style={modalStyles.input}
              required
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>본문 내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="오늘 봉사는 어떠셨나요? 자유롭게 기록해보세요."
              style={modalStyles.textarea}
              required
            />
          </div>

          <div style={modalStyles.uploadSection}>
            <div style={modalStyles.fileInputWrapper}>
              <label style={modalStyles.fileLabel}>📸 대표 이미지 첨부</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div style={modalStyles.fileInputWrapper}>
              <label style={modalStyles.fileLabel}>
                📁 봉사 자료 첨부 (PDF, DOCX 등)
              </label>
              <input type="file" multiple onChange={handleFileChange} />
            </div>
          </div>

          <button
            type="submit"
            style={modalStyles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? '업로드 중...' : '업로드하기'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteModal;
