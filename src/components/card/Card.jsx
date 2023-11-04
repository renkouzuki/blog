import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>11.02.2023</span>
                        <span className={styles.category}>CULTURE</span>
                    </div>
                    <Link href="/">
                        <h1>Lorem ipsum dolor sit amet consectotur adipisicing elit.</h1>
                    </Link>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
                        dignissimos ullam commodi eos adipisicing facere! Quit id explicabo ipsam
                        totam libero ipsa aligquam obcaecati, in facere molestiae architecto
                        asperiores?...
                    </p>
                    <Link href="/">Read More</Link>
                </div>
    </div>
  )
}

export default Card