// 여러 페이지 또는 컴포넌트들에서 공통으로 사용될 간단한 기능 및 배열을 작성한 문서

// 숫자 인자로 주어진 평점을 다섯 개의 별을 사용한 문자열로 반환하여 내보냅니다.
export const renderStars = (rating) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}

// 책의 일련 번호에 따라 다섯 개의 책 이모지 중 하나를 반환해요.
export const getBookEmoji = (index) => {
  return ['📕','📗','📙','📘','📔'][Number(index) % 5]
}

// 장르의 드랍다운 선택지들로 사용될 문자열들의 배열입니다.
export const genres = [
  'Fiction', 'Non-fiction', 'Fantasy',
'Dystopian', 'Philosophy', 'Romance', 'Programming'
]