import { cardStyles } from './PostCard.styles.js';

const PostCard = ({ post }) => {
  return (
    <div style={cardStyles.cardContainer}>
      <div style={cardStyles.thumbnailZone}>
        {post.imgUrl ? (
          <img
            src={post.imgUrl}
            alt={post.title}
            style={cardStyles.thumbnailImg}
          />
        ) : (
          <span style={cardStyles.fallbackText}>{post.category}</span>
        )}
      </div>

      <div style={cardStyles.infoZone}>
        <div>
          <div style={cardStyles.tagContainer}>
            {post.tags?.map((tag, index) => (   // ← ?. 추가
              <span key={index} style={cardStyles.tag}>
                #{tag}
              </span>
            ))}
          </div>

          <h3 style={cardStyles.title}>{post.title}</h3>
          <p style={cardStyles.content}>{post.content}</p>
        </div>

        <div style={cardStyles.footer}>
          <div style={cardStyles.authorBox}>
            <div style={cardStyles.avatar} />
            <span style={cardStyles.authorName}>{post.author?.name}</span>  {/* ← ?. 추가 */}
            <span style={cardStyles.dateText}>{post.date ?? post.createdAt}</span>  {/* ← 폴백 추가 */}
          </div>

          <div style={cardStyles.likeBox}>
            <span style={cardStyles.heartIcon}>❤️</span>
            <span>{post.likes ?? 0}</span>  {/* ← 폴백 추가 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;