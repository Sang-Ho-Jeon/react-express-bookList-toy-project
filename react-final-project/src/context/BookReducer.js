// Reducer: 여러 컴포넌트에서 사용할 수 있는 state 변경 로직을 외부로 분리하는데 사용
export const bookReducer = (state, action) => {
  switch (action.type) {
    // state에 속한 books 배열에 책들을 등록하고, 새 책을 추가하고, 기존 책의 데이터를 수정하고, 특정 책을 삭제하는 작업
    case 'SET_BOOKS':
      // 객체 스프레딩을 사용해서, state 객체 중 books의 값으로 action에 담긴 payload를 할당하는 코드
      // payload에는 서버로부터 받아온 책들의 배열이 담겨 있음
      return { ...state, books: action.payload } 
    case 'ADD_BOOK':
      // 새 책이 입력되어 서버의 책 목록에 성공적으로 추가되면, 이 애플리케이션의 리스트에도 이를 반영하기 위해 실행됨
      // payload에는 추가할 책의 객체가 담겨 있음
      return { ...state, books: [...state.books, action.payload] }
    case 'UPDATE_BOOK':
      // payload에는 수정된 책의 데이터가 객체로 담겨옴
      // 매핑을 통해, 기존의 책들 중 해당 책과 인덱스 번호가 같은 책을 payload에 담긴 수정된 책으로 변경
      // 책의 수정 작업이 서버에 성공적으로 반영되고 나면 실행되는 작업
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        )
      }
    case 'DELETE_BOOK':
      // payload에는 해당 책의 인덱스 번호만 담겨오고, 기존 배열에서 해당 번호의 책을 필터링으로 삭제
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      }
    default:
      return state
  }
}