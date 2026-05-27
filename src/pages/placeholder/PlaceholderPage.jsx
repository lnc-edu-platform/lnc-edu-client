import { EmptyState } from './PlaceholderPage.styles.js';

export function PlaceholderPage({ title }) {
  return (
    <EmptyState>
      <h1>{title}</h1>
      <p>페이지 내용을 준비 중입니다.</p>
    </EmptyState>
  );
}
