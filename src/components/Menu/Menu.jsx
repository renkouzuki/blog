import React from 'react'
import styles from './menu.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
const Menu = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Recent Posts
        </h1>
        <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Pagination/>
    </div>
  )
}

export default Menu