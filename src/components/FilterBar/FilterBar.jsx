import { filterStyles } from './FilterBar.styles'; // 스타일 임포트

const FilterBar = ({ activeTab, onTabChange }) => {
  const categories = ['전체', '산격중', '침산초', '태전중', '복현초', '청소년문화의집', '행사', '운영'];

  return (
    <div style={filterStyles.filterContainer}>
      {categories.map((category) => {
        const isActive = activeTab === category;
        
        // 두 개의 객체 스타일을 조건부로 합성(Merge)합니다.
        const currentButtonStyle = {
          ...filterStyles.filterButton,
          ...(isActive ? filterStyles.activeButton : {})
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