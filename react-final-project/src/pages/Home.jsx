import { useBookContext } from '../context/BookContext'
import styles from './Home.module.css'
import BookList from '../components/BookList'
import { genres } from '../utils'

const Home = () => {
  // 이 state들이 변경되면 BookProvider 컴포넌트 함수도 다시 실행되어 useFetch도 재실행됩니다.
  // 의존성 배열을 갖는 useEffect도 다시 실행되어, 리듀서의 SET BOOKS 액션이 재실행됩니다.
  const { setGenre, setSearch } = useBookContext()

  return (
    <div>
      <header className={styles.topbar}>
        <h1>Book List</h1>
        <div>
          <input 
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setGenre(e.target.value)}>
            <option value="">All Genres</option>
            {genres.map((genre, idx) => (
              <option key={idx} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

      </header>
      <BookList />
    </div>
  )
}

export default Home
