import Navbar from './Navbar'
import styles from './Layout.module.css'

// 이 컴포넌트는 다른 컴포넌트들을 포함하는 고정된 틀의 역할로 사용됩니다.
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout