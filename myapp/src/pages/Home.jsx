import React from 'react';

import styles from './Home.module.css';

import PostForm from '../components/layout/PostForm';
import GetPost from '../components/layout/GetPost'

const Home = () => {

  return (
    <div className={styles.post_container}>
      <PostForm />
      <div>
        <GetPost />
      </div>
    </div>
  )
}

export default Home

