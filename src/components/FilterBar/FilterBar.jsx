import { filterStyles } from './FilterBar.styles'; // 스타일 임포트

const FilterBar = ({ activeTab, onTabChange }) => {
  const categories = [
    '전체',
    '산격중',
    '성광중',
    '칠성초',
    '경북여고',
    '경운초',
    '신암지역아동센터',
    '행사',
    '기타',
  ];

  return (
    <div style={filterStyles.filterContainer}>
      {categories.map((category) => {
        const isActive = activeTab === category;

        // 두 개의 객체 스타일을 조건부로 합성(Merge)합니다.
        const currentButtonStyle = {
          ...filterStyles.filterButton,
          ...(isActive ? filterStyles.activeButton : {}),
        };

        return (
          <button
            key={category}
            style={currentButtonStyle}
            onClick={() => onTabChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
