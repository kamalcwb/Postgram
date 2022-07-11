import React from 'react';

import styles from './Home.module.css';

import PostForm from '../components/layout/PostForm';
import GetPost from '../components/layout/GetPost'

const Home = () => {
  const createPost = (post) => {

    fetch("http://localhost:5000/posts/newpost", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.post_container}>
      <PostForm handleSubmit={createPost} btnText="Postar" />
      <div>
        <GetPost />
      </div>
    </div>
  )
}

export default Home

