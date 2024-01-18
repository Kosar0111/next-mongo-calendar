import { FC } from 'react'
import styles from './Header.module.css'

interface Props {}

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>Daily Calendar</div>
      <div className={styles.logIn}>Log In</div>
    </header>
  )
}
