import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../../components/FilterBar/FilterBar.jsx';
import PostCard from '../../components/PostCard/PostCard.jsx';
import { RetrospectStyle } from './Retrospect.styles.js';
import WriteModal from './WriteModal.jsx';
import { fetchReflections } from './retrospectApi.js';
import { useAuth } from '../../context/AuthContext.jsx';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',
  padding: '20px 10px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const RetrospectPage = () => {
  const { token } = useAuth();           // ← Context에서 토큰 꺼내기
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('전체');

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const { data, isFallback: fallback } = await fetchReflections(token);
      setPosts(data ?? []);
      setIsFallback(fallback);
      setIsLoading(false);
    };
    load();
  }, [token]);

  const handleAddPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const filteredPosts =
    activeTab === '전체' ? posts : posts.filter((p) => p.category === activeTab);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 10px 10px 10px' }}>
        <h4 style={RetrospectStyle.littleT}>RETROSPECT</h4>
        <h1 style={RetrospectStyle.title}>회고</h1>
        {isFallback && (
          <p style={{ fontSize: '12px', color: '#adb5bd', margin: '4px 0 0 0' }}>
            ※ 서버에 연결할 수 없어 임시 데이터를 표시합니다.
          </p>
        )}
      </div>

      <button onClick={() => setIsModalOpen(true)} style={RetrospectStyle.button}>
        회고쓰기
      </button>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
        <FilterBar activeTab={activeTab} onTabChange={setActiveTab} />

        {isLoading ? (
          <p style={{ textAlign: 'center', color: '#adb5bd', margin: '80px 0', fontSize: '15px' }}>
            불러오는 중...
          </p>
        ) : (
          <div style={gridStyle}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/retrospect/${post.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredPosts.length === 0 && (
          <p style={{ textAlign: 'center', color: '#adb5bd', margin: '80px 0', fontSize: '15px' }}>
            해당 봉사처에 등록된 회고록이 아직 없습니다.
          </p>
        )}
      </div>

      {isModalOpen && (
        <WriteModal onClose={() => setIsModalOpen(false)} onUpload={handleAddPost} />
      )}
    </div>
  );
};

export default RetrospectPage;
