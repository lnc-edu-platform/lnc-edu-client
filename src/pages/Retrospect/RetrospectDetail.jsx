import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { detailStyles } from './RetrospectDetail.styles.js';
import {
  fetchReflectionById,
  updateReflection,
  deleteReflection,
  formatDate,
} from './retrospectApi.js';
import { useAuth } from '../../context/AuthContext.jsx';

// ── 목데이터 모드에서 "현재 로그인 유저" 가정 ────
// 실제 로그인 연동 후엔 이 상수 불필요 (useAuth의 user로 대체)
const MOCK_LOGIN_ID = 'kimjw';

// ── 수정 모달 컴포넌트 ─────────────────────────
const EditModal = ({ post, onSave, onClose, isSaving }) => {
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);

  return (
    <div style={modalStyle.overlay}>
      <div style={modalStyle.box}>
        <div style={modalStyle.header}>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>
            회고 수정
          </h2>
          <button
            onClick={onClose}
            style={modalStyle.closeBtn}
            disabled={isSaving}
          >
            &times;
          </button>
        </div>

        <div style={modalStyle.body}>
          <div style={modalStyle.inputGroup}>
            <label style={modalStyle.label}>제목</label>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              style={modalStyle.input}
              placeholder="제목을 입력하세요"
            />
          </div>
          <div style={modalStyle.inputGroup}>
            <label style={modalStyle.label}>본문 내용</label>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              style={modalStyle.textarea}
              placeholder="내용을 입력하세요"
            />
          </div>
        </div>

        <div style={modalStyle.footer}>
          <button
            onClick={onClose}
            style={modalStyle.cancelBtn}
            disabled={isSaving}
          >
            취소
          </button>
          <button
            onClick={() => onSave({ title: editTitle, content: editContent })}
            style={modalStyle.saveBtn}
            disabled={isSaving || !editTitle.trim() || !editContent.trim()}
          >
            {isSaving ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    width: '540px',
    maxWidth: '90vw',
    boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    borderBottom: '1px solid #f1f3f5',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
    color: '#868e96',
  },
  body: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#495057' },
  input: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #ced4da',
    fontSize: '15px',
    outline: 'none',
  },
  textarea: {
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #ced4da',
    fontSize: '14px',
    minHeight: '160px',
    resize: 'vertical',
    outline: 'none',
    lineHeight: '1.7',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    padding: '16px 24px',
    borderTop: '1px solid #f1f3f5',
  },
  cancelBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    backgroundColor: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  saveBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#6b9e78',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '700',
  },
};

// ── 메인 컴포넌트 ──────────────────────────────
const RetrospectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { accessToken, user } = useAuth();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const { data, isFallback: fallback } = await fetchReflectionById(
        id,
        accessToken,
      );
      if (!data) setNotFound(true);
      else {
        setPost(data);
        setIsFallback(fallback);
      }
      setIsLoading(false);
    };
    load();
  }, [id, accessToken]);

  // ── 본인 여부 판단 ──────────────────────────
  // 실제 로그인: user.loginId vs post.author.loginId 비교
  // 목데이터 모드: MOCK_LOGIN_ID로 비교 (kimjw만 수정/삭제 가능)
  const currentLoginId = user?.loginId ?? (isFallback ? MOCK_LOGIN_ID : null);
  const isOwner = !!currentLoginId && currentLoginId === post?.author?.loginId;

  // ── 수정 저장 ───────────────────────────────
  const handleSave = async ({ title, content }) => {
    setIsSaving(true);
    const { data } = await updateReflection(
      id,
      { title, content },
      accessToken,
    );
    if (data) setPost(data);
    setIsSaving(false);
    setIsEditModalOpen(false);
  };

  // ── 삭제 ────────────────────────────────────
  const handleDelete = async () => {
    if (!window.confirm('이 회고를 삭제할까요? 삭제 후 복구할 수 없습니다.'))
      return;
    const { success } = await deleteReflection(id, accessToken);
    if (success) navigate('/retrospect');
  };

  // ── 렌더 분기 ───────────────────────────────
  if (isLoading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#adb5bd' }}>
        불러오는 중...
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>게시글을 찾을 수 없습니다.</p>
        <button
          onClick={() => navigate('/retrospect')}
          style={detailStyles.backBtn}
        >
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div style={detailStyles.wrapper}>
      {/* 수정 모달 */}
      {isEditModalOpen && (
        <EditModal
          post={post}
          onSave={handleSave}
          onClose={() => setIsEditModalOpen(false)}
          isSaving={isSaving}
        />
      )}

      {/* 상단 네비 */}
      <div style={detailStyles.navHeader}>
        <button
          onClick={() => navigate('/retrospect')}
          style={detailStyles.backBtn}
        >
          ← 목록으로 돌아가기
        </button>
        {isFallback && (
          <span
            style={{ fontSize: '12px', color: '#adb5bd', marginLeft: '12px' }}
          >
            (임시 데이터)
          </span>
        )}
      </div>

      <div style={detailStyles.container}>
        {/* 태그 */}
        <div style={detailStyles.tagContainer}>
          {post.tags?.map((tag, i) => (
            <span key={i} style={detailStyles.tag}>
              #{tag}
            </span>
          ))}
        </div>

        {/* 제목 */}
        <h1 style={detailStyles.title}>{post.title}</h1>

        {/* 메타 바 */}
        <div style={detailStyles.metaBar}>
          <div style={detailStyles.authorBox}>
            <div style={detailStyles.avatar} />
            <div>
              <div style={detailStyles.authorName}>
                {post.author?.name ?? '작성자'}
              </div>
              <div style={detailStyles.dateText}>
                {formatDate(post.createdAt)}
                {post.updatedAt !== post.createdAt && (
                  <span style={{ color: '#ced4da' }}> · 수정됨</span>
                )}
              </div>
            </div>
          </div>

          <div style={detailStyles.actionBox}>
            <button style={detailStyles.actionBtn}>❤️ {post.likes ?? 0}</button>
            <button style={detailStyles.actionBtn}>스크랩</button>

            {/* 본인 글에만 수정/삭제 노출 */}
            {isOwner && (
              <>
                <button
                  style={{
                    ...detailStyles.actionBtn,
                    color: '#6b9e78',
                    fontWeight: '600',
                  }}
                  onClick={() => setIsEditModalOpen(true)}
                >
                  ✏️ 수정
                </button>
                <button
                  style={{
                    ...detailStyles.actionBtn,
                    color: '#e03131',
                    fontWeight: '600',
                  }}
                  onClick={handleDelete}
                >
                  🗑 삭제
                </button>
              </>
            )}
          </div>
        </div>

        {/* 본문 */}
        <div style={detailStyles.contentBody}>
          <div style={detailStyles.quoteBox}>
            <strong>{post.category ?? '회고'} 기록:</strong>
            <br />
            {post.content.slice(0, 80)}...
          </div>

          <h3>활동 상세 내용</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>

        </div>

        
      </div>
    </div>
  );
};

export default RetrospectDetail;
