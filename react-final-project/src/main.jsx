import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BookProvider } from './context/BookContext'
import App from './App'
import './index.css'

// 앱 전역에서 사용될 데이터들이기 때문에 컨텍스트 프로바이더도 여기 작성함.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BookProvider>
      <App />
    </BookProvider>
  </BrowserRouter>
)
