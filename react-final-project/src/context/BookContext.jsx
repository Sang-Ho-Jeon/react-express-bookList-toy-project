import { createContext, useReducer, useContext, useEffect, useState } from 'react'
import { bookReducer } from './BookReducer'
import { useFetch } from '../hooks/useFetch'

// 컨텍스트 문서에서는 프로바이더와 컨텍스트 객체를 export합니다.
const BookContext = createContext()

export const BookProvider = ({ children }) => {
  // 초기값으로는 'books'라는 속성으로 빈 배열을 가진 객체가 사용됨. 이곳에 책들을 담은 배열이 할당되어 페이지에 렌더링될 것입니다.
  const [state, dispatch] = useReducer(bookReducer, { books: [] })
  // 'filterParams'란 state에는 말 그대로 책의 필터링에 사용될 값들이 객체로 묶여 담깁니다.
  // 제목과 작가명을 검색하는 입력창과 장르를 선택하는 드롭다운을 통해 입력될 값들이죠.
  const [filterParams, setFilterParams] = useState({ genre: '', search: ''})
  // 이들을 속성으로 담은 객체를, 브라우저 API로 제공되는 기능인 URLSearchParams를 통해 쿼리 문자열로 치환합니다.
  // 예시) new URLSearchParams({ genre: 'Fiction', search: 'Harry'}).toString()는 'genre=Fiction&search=Harry'로 치환됨
  const queryString = new URLSearchParams(filterParams).toString()
  // 이를 URL에 덧붙여서 책들의 목록을 가져오는 요청을 useFetch를 통해 보내는 것입니다.
  // 따로 옵션을 지정하지 않았으므로, 특정 데이터를 요청하는 GET 메소드로 요청이 보내어지게 돼요.
  // useFetch훅을 통해 책들의 배열을 담은 data, 로딩중 여부를 나타내는 loading, 오류 발생 여부를 나타내는 error값이 설정됩니다.
  const { data, loading, error } = useFetch(`/books?${queryString}`)
  // data 배열은 useEffect를 통해, BookReducer에 설정한 'SET BOOKS' 액션에 사용돼요.
  useEffect(() => {
    if (data) {
      dispatch({type: 'SET_BOOKS', payload: data})
    }
  }, [data])

  // 이 둘은 필터링 객체 state에서 각각 'search'와 'genre'값을 변경시키는 함수. 프로바이더에서 제공될 값들로 사용됩니다.
  const setGenre = (genre) => {
    setFilterParams(prev => ({ ...prev, genre }))
  }

  const setSearch = (search) => {
    setFilterParams(prev => ({ ...prev, search }))
  }

  return (
    // 책들의 배열과 리듀서의 dispatch, 로딩과 오류 여부 모두 프로바이더에 의해 제공
    
    <BookContext.Provider value={{ books: state.books, dispatch, loading, error, setGenre, setSearch}}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)