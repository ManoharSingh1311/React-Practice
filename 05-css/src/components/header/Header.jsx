import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Hi, Manohar Singh</h1>
        
        <div className={styles.logo}>
              <h2>Graduated from graphic era hill university, dehradun</h2>
        </div>

    </div>
  )
}

export default Header