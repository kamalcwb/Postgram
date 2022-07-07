import React from 'react';

import styles from './Posts.module.css';

import PostForm from '../components/layout/PostForm';
import GetPost from '../components/layout/GetPost'

const Posts = () => {


    const createPost = (msg) => {

        fetch("http://localhost:5000/posts", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(msg),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
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

export default Posts
