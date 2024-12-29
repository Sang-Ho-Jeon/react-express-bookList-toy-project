import { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { useBookContext } from "../context/BookContext"
import { genres } from '../utils'
import styles from './BookForm.module.css'

// EditBook 페이지에서도 사용
// AddBook 페이지가 부모일 때는 initialData prop의 값이 전달되지 않으므로 빈 객체로 초기화
// 기존 책의 내용을 변경하는 EditBook 페이지에서는 여기에 변경할 책의 데이터가 실려옴
const BookForm = ({ initialData = {}, onSubmit }) => {
  const { dispatch } = useBookContext()
  const navigate = useNavigate()

  // 사용자가 입력하는 값을 실시간으로 렌더링에 반영하는 부분이 없으므로 state를 사용할 필요는 없음
  // useRef는 특정 HTML 요소를 직접 다루는데도 사용 가능
  const titleRef = useRef()
  const authorRef = useRef()
  const genreRef = useRef()
  const dateRef = useRef()
  const ratingRef = useRef()
  const availableRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const bookData = {
      id: initialData.id || null,
      title: titleRef.current.value,
      author: authorRef.current.value,
      genre: genreRef.current.value,
      publishedDate: dateRef.current.value,
      rating: parseInt(ratingRef.current.value, 10),
      available: availableRef.current.checked
    }

    onSubmit(bookData)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input ref={titleRef} defaultValue={initialData.title || ''} placeholder="Title" required />
      <input ref={authorRef} defaultValue={initialData.author || ''} placeholder="Author" required/>
      <select ref={genreRef} defaultValue={initialData.genre || ''} required>
        <option value="" disabled>Select Genre</option>
        {genres.map((genre, index) => (<option key={index} value={genre}>{genre}</option>))}
      </select>
      <input ref={dateRef} defaultValue={initialData.publishedDate || ''} placeholder="Published Date" required type="date" />
      <input ref={ratingRef} defaultValue={initialData.rating || 1} placeholder="Rating (1-5)" required type="number" min="1" max="5" />
      <label>
        <input ref={availableRef} type="checkbox" defaultChecked={initialData.available || false} />
        Available
      </label>
      <div className={styles.buttons}>
        <button type="submit">{initialData.id ? 'Update Book' : 'Add Book'}</button>
        <button type="button" onClick={() => navigate('/')} className={styles.cancelButton}>cancle</button>
      </div>
    </form>
  )
}

export default BookForm
