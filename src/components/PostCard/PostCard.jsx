import React from 'react';
import { cardStyles } from './PostCard.styles.js';

const PostCard = ({ post }) => {
  return (
    <div style={cardStyles.cardContainer}>
      {/* 1. 상단 구역 (이미지 혹은 대형 텍스트 대체) */}
      <div style={cardStyles.thumbnailZone}>
        {post.imgUrl ? (
          <img src={post.imgUrl} alt={post.title} style={cardStyles.thumbnailImg} />
        ) : (
          <span style={cardStyles.fallbackText}>{post.category}</span>
        )}
      </div>

      {/* 2. 하단 구역 (상세 정보) */}
      <div style={cardStyles.infoZone}>
        <div>
          {/* 태그 모음 */}
          <div style={cardStyles.tagContainer}>
            {post.tags.map((tag, index) => (
              <span key={index} style={cardStyles.tag}>#{tag}</span>
            ))}
          </div>
          
          {/* 제목 및 본문 요약 */}
          <h3 style={cardStyles.title}>{post.title}</h3>
          <p style={cardStyles.content}>{post.content}</p>
        </div>

        {/* 3. 푸터 구역 */}
        <div style={cardStyles.footer}>
          <div style={cardStyles.authorBox}>
            <div style={cardStyles.avatar} /> {/* 프로필 동그라미 */}
            <span style={cardStyles.authorName}>{post.author.name}</span>
            <span style={cardStyles.dateText}>{post.date}</span>
          </div>
          
          <div style={cardStyles.likeBox}>
            <span style={cardStyles.heartIcon}>❤️</span>
            <span>{post.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;